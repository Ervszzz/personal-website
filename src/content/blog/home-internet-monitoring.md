---
title: Was it an outage or just an update? Monitoring my Starlink at home
date: 2026-10-25
summary: My internet kept dropping for a few minutes at random, and the Starlink app couldn't tell me why. So I built an outage logger that works out the cause of every drop and tells me on Telegram.
---

Every so often my internet would drop, or the Starlink dish would reboot. It never lasted long, usually a couple of minutes, but it kept happening at random times, and I wanted to know whether there was a pattern behind it.

The Starlink app didn't help much. It shows the dish's current state, but it doesn't notify you when a firmware update is waiting to install. So when the connection dropped, I couldn't tell the difference between the dish rebooting for an update, which is harmless, and a real outage, like the dish losing sight of the satellites.

That's the question I wanted answered automatically: **was that a real outage, or just an update?**

## The idea: let the logger decide

I wanted something that would watch the connection around the clock and, when it dropped, tell me *what* broke and *why*, without me having to dig through anything. Specifically:

- **Is the internet working right now?**
- **If not, what broke?** The home network, the dish, Starlink's service, or DNS.
- **Was a dish reboot an update or a real problem?** With a notification either way.
- **How often, and for how long?** With a history I can look back on, or attach to a support ticket.

So I built an **Outage Logger**: a small service on my Mac Mini that checks the connection every 30 seconds, works out the cause of every outage, and labels update reboots for what they are. Around it sits a standard monitoring stack (Prometheus, Grafana, Loki and Alertmanager) for charts, logs and Telegram alerts.

## Follow the path

Every request from the Mac Mini passes through the same hops: the Deco mesh, which runs in access-point mode and simply passes traffic through; the Starlink router, which is the real gateway for every device in the house; the dish; and then the satellites and the internet.

<figure>
<div class="post-scroll">
<svg viewBox="0 0 760 170" width="100%" style="min-width: 620px" role="img" aria-labelledby="path-title path-desc">
<title id="path-title">The path from the Mac Mini to the internet</title>
<desc id="path-desc">Mac Mini, then Deco mesh in access-point mode, then the Starlink router, then the Starlink dish, then the internet. The outage logger checks three points: the router, the dish, and the internet plus DNS.</desc>
<g stroke-width="2"><path class="dg-path" d="M128 122H158M286 122H316M444 122H474M602 122H632"/></g>
<g stroke-width="1.5" stroke-dasharray="4 4"><path class="dg-check" d="M380 42V88M538 42V88M696 42V88"/></g>
<g font-size="12">
<rect class="dg-check-fill" x="318" y="14" width="124" height="28" rx="14"/><text class="dg-check-text" x="380" y="32" text-anchor="middle">1  Router</text>
<rect class="dg-check-fill" x="476" y="14" width="124" height="28" rx="14"/><text class="dg-check-text" x="538" y="32" text-anchor="middle">2  Dish</text>
<rect class="dg-check-fill" x="634" y="14" width="124" height="28" rx="14"/><text class="dg-check-text" x="696" y="32" text-anchor="middle">3  Internet + DNS</text>
</g>
<g stroke-width="1.5">
<rect class="dg-box-accent" x="1" y="89" width="127" height="66" rx="8"/>
<rect class="dg-box" x="158" y="89" width="128" height="66" rx="8"/>
<rect class="dg-box" x="316" y="89" width="128" height="66" rx="8"/>
<rect class="dg-box" x="474" y="89" width="128" height="66" rx="8"/>
<rect class="dg-box" x="632" y="89" width="127" height="66" rx="8"/>
</g>
<g font-size="14" text-anchor="middle">
<text class="dg-text" x="64" y="117">Mac Mini</text><text class="dg-muted" x="64" y="137" font-size="11">runs everything</text>
<text class="dg-text" x="222" y="117">Deco mesh</text><text class="dg-muted" x="222" y="137" font-size="11">access-point mode</text>
<text class="dg-text" x="380" y="117">Starlink router</text><text class="dg-muted" x="380" y="137" font-size="11">home gateway</text>
<text class="dg-text" x="538" y="117">Starlink dish</text><text class="dg-muted" x="538" y="137" font-size="11">via satellites</text>
<text class="dg-text" x="696" y="117">Internet</text><text class="dg-muted" x="696" y="137" font-size="11">1.1.1.1, 8.8.8.8</text>
</g>
</svg>
</div>
<figcaption>Every 30 seconds the outage logger checks three points along the path. Where the checks start failing tells you what broke.</figcaption>
</figure>

A single ping to the internet only tells you that something is wrong. Checking points along the path tells you *where*. The logger walks the path in order, and the first point that doesn't answer decides the cause:

1. **The router doesn't answer:** home network down (the Deco or the Starlink router).
2. **The router answers, but neither the dish nor the internet does:** Starlink dish offline, usually because it's rebooting.
3. **The dish answers, but the internet doesn't:** no Starlink service, from an obstruction, heavy rain, or a problem on Starlink's side.
4. **The internet answers, but names don't resolve:** DNS failing.
5. **The Mac Mini itself was off:** nothing could be measured, so when it comes back the logger records the gap as "Power outage / Mini restarted". That's a gap in monitoring, not proof the internet was down.

## Telling updates from real outages

This was the part I actually cared about. The starlink-exporter reads the dish's own stats, including its uptime and whether a firmware update is waiting. When the dish's uptime starts over, the logger asks Prometheus whether an update was pending. If one was, the outage gets the reason "Starlink rebooted to install an update". If not, it's "Starlink rebooted", which is worth a closer look.

I also get the heads-up the app never gave me. Telegram tells me when an update has downloaded, when the dish is about to reboot to install it, and when it has rebooted. During an update, the event log reads like this:

```
14:02:10  info     Starlink update downloaded, waiting to install
14:31:45  warning  Starlink is ready to reboot for the update. Expect a few minutes offline.
14:32:15  error    Outage started: Starlink dish offline
14:35:40  info     Back online after 3m 25s (Starlink dish offline)
14:35:40  info     Starlink rebooted to install an update
```

Two more rules keep the results honest:

- **Short blips are ignored.** An outage only starts after two failed checks in a row, about a minute. The first failure still shows up in the log as a warning, so nothing is hidden.
- **It doesn't guess.** With several mesh units, there's no single Deco to check. If the one the Mini connects through goes down, that looks exactly like the router going down, so the cause says "Deco or Starlink router" rather than pretending to know.

## What runs on the Mini

Everything runs in Docker (OrbStack) on the Mac Mini, and every container restarts on its own after a crash or a reboot. The logger runs separately from the rest, so it keeps recording even when I stop the main stack to change something.

- **Outage Logger**, my own service: the checks, the cause, the outage history, a record of any time the Mini was off, and its own page with a CSV download.
- **starlink-exporter**: stats straight from the dish, like throughput, latency, packet loss, obstructions, uptime and pending updates.
- **blackbox-exporter**: pings and DNS lookups against 1.1.1.1 and 8.8.8.8, and loading google.com and cloudflare.com.
- **Prometheus** stores the numbers and evaluates the alert rules, **Alertmanager** sends them to Telegram, **Loki** stores a searchable log line for every check, and **Grafana** puts it all on one dashboard.

<figure>
<img src="/personal-website/blog/home-internet-monitoring/dish-dashboard.webp" width="1534" height="809" loading="lazy" alt="Grafana dashboard showing the dish up with a clear sky view, 54.6 ms latency, 0.25% packet loss, 0.8% obstructed area and 3.32 hours of dish uptime, above six-hour charts of throughput, latency and packet loss.">
<figcaption>The dish section of the dashboard. The one spike to 100% packet loss, at 15:14, is the dish rebooting to install a firmware update.</figcaption>
</figure>

On top of the update notifications, Telegram alerts me when the internet or the dish has been down for a minute, when websites stop loading while ping still works (usually DNS), and when packet loss, latency or obstructions stay high. The stack also alerts on itself if an exporter or the logger stops reporting.

There's one catch I had to accept: **Telegram needs the internet.** An "internet down" alert can only reach my phone once the connection is back. The logs are still accurate to the minute, which is why the local history matters more than the alert itself.

## What it's found so far

### It caught an update

On October 25 at 15:14, the connection dropped for 48 seconds. Before the logger, that would have been one more unexplained blip. This time Telegram told me what happened:

<figure>
<img src="/personal-website/blog/home-internet-monitoring/telegram-update.webp" width="471" height="126" loading="lazy" style="width: 471px" alt="Two Telegram messages at 15:14: The Starlink firmware update has been installed, the update is no longer waiting to be installed. Starlink dish rebooted, the dish restarted in the last 10 minutes.">
<figcaption>The two Telegram notifications at 15:14.</figcaption>
</figure>

And the event log had the answer:

<figure>
<img src="/personal-website/blog/home-internet-monitoring/event-log-update.webp" width="1011" height="143" loading="lazy" alt="Event log line at 2026-10-25 15:14:01: INFO Starlink rebooted to install an update (dish was back up 27s ago).">
<figcaption>The logger noticed the dish's uptime had started over, saw an update had been waiting, and labelled the reboot.</figcaption>
</figure>

That's the exact question I built this for, answered on its own: not a real outage, just an update.

It also turned up something to fix. The outage table still lists that drop as "No Starlink service", with an empty Reason column. The event log and Telegram labelled it correctly, but the reason didn't make it onto the outage row.

### The rest of the first nine days

Between October 17 and 25 the logger recorded one other drop, also 48 seconds, on October 17. It's labelled "No Starlink service" too. Since the update reason doesn't reach the outage table yet, I can't say for certain whether it was a real outage or another update, which is exactly why that fix is first on my list.

The log also has three "Power outage / Mini restarted" entries (7 minutes, 4 hours and 46 minutes). Those aren't internet outages. They're times the Mac Mini, and so the whole monitoring stack, wasn't running, so nothing was measured. The internet may well have been fine. They're worth keeping in the log because they show exactly when the monitoring had blind spots.

<figure>
<img src="/personal-website/blog/home-internet-monitoring/outage-log.webp" width="1491" height="382" loading="lazy" alt="Outage log for the last 30 days: two No Starlink service outages of 48 seconds on October 17 and 25, and three Power outage or Mini restarted entries of 7 minutes, 4 hours and 46 minutes, next to a downtime-by-cause panel showing 2 minutes for No Starlink service and 5 hours for the Mini being off.">
<figcaption>The first nine days. The top row is the October 25 update reboot, which the table still shows as "No Starlink service". The "Power outage / Mini restarted" rows are periods when the monitor wasn't running.</figcaption>
</figure>

The check history showed something I'd never have noticed by hand, too. Checks against 1.1.1.1 fail now and then throughout the day, while 8.8.8.8 stays green. If I'd only pinged one address, I'd have been chasing false alarms. Checking several targets, and only counting an outage after two failures in a row, keeps those blips out of the outage log.

<figure>
<img src="/personal-website/blog/home-internet-monitoring/internet-checks.webp" width="1522" height="742" loading="lazy" alt="Internet checks panel: internet up, websites OK, 45 ms ping and 99.93% uptime over 24 hours. The check history shows scattered red failures for ping and DNS against 1.1.1.1, mostly green for 8.8.8.8 and the websites, and one red line across every check at 15:14.">
<figcaption>Six hours of internet checks. The scattered red marks on 1.1.1.1 are single failed checks; the line across every row at 15:14 is the update reboot.</figcaption>
</figure>

## What I took from it

- **Check the path, not just the destination.** Where checks start failing is the diagnosis.
- **Label the expected.** A planned reboot that looks like an incident trains you to ignore alerts. It's the same reason I tune monitors at work.
- **Don't trust an alert channel that depends on the thing it watches.** Record locally, and alert when you can.
- **Know when you're blind.** A monitor that's off can't report an outage, so record the gaps too, and don't count them as downtime.

## What's next

- **Attach the update reason to the outage row,** so the outage table says "update" as clearly as the event log and Telegram do.
- **Fewer blind spots.** A UPS for the Mini, and ideally the router, so the monitoring keeps running if the power goes out, and the gaps in the log shrink.
- **Tailscale,** so I can open the dashboards away from home.

I built the first version over two days in October 2026, with AI-assisted development.
