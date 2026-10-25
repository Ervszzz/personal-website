---
title: My homelab: one Mac Mini, one Telegram bot, one Grafana
date: 2026-10-25
summary: How a single Starlink monitor turned into a small homelab, and why every project on my Mac Mini now shares one place for alerts, metrics and logs.
---

A Mac Mini at home runs a handful of small services for me: a Starlink monitor, an outage logger, PDF tools, a start page, and an alert bot for typhoons and fuel prices. They started as separate projects. This is how they ended up sharing one setup for alerts, metrics and logs, and the few rules that keep it manageable.

## Why a Mac Mini at home

Two reasons. I already owned it, so there was nothing to buy and no monthly bill. And I wanted these services, and the data they collect, to stay on my own network instead of on a server on the internet. Nothing is exposed publicly: the dashboards only open on my home Wi-Fi.

Everything runs in Docker through OrbStack. Each project lives in its own folder with its own `docker-compose.yml`, and the containers restart on their own after a crash or a reboot.

## How it started

The first project was the [Starlink monitor](/personal-website/blog/home-internet-monitoring/). To answer "was that an outage or just an update?", it needed a proper monitoring stack: Prometheus for metrics, Loki for logs, Alertmanager for alerts and Grafana for dashboards.

Meanwhile, I had several other projects already running on the Mini with no logging at all. If one of them broke, I wouldn't have known until I tried to use it.

So instead of giving each project its own monitoring, or none, I plugged them into the stack I'd just built for Starlink.

## What runs on it

- **Starlink Monitor:** a Grafana dashboard for the dish and my internet connection, with phone alerts through Telegram.
- **Outage Logger:** records every time the internet drops, works out what failed, and keeps the history. It also feeds the internet status on my start page.
- **PH Alerts:** Telegram alerts for PAGASA typhoon wind signals in the areas I care about, and weekly fuel price changes. It's built, but I haven't put it to real use yet.
- **PDF Toolbox:** a self-hosted Stirling-PDF for editing, signing, redacting, OCR, compressing and merging PDFs, so private documents never get uploaded to a random website.
- **Glance:** my browser start page, and the front door to everything else.

## One place for everything

The homelab works as one system because of three shared pieces.

<figure>
<div class="post-scroll">
<svg viewBox="0 0 760 330" width="100%" style="min-width: 620px" role="img" aria-labelledby="hl-title hl-desc">
<title id="hl-title">How the homelab fits together</title>
<desc id="hl-desc">On the Mac Mini, Starlink Monitor, Outage Logger and PH Alerts feed one shared monitoring stack: Prometheus for metrics, Loki for logs, Alertmanager for alerts and Grafana for dashboards. Alertmanager sends every alert to one Telegram chat. PDF Toolbox runs alongside. Glance, the start page, checks every service. Telegram and Glance are how I see it all, on my phone and browser.</desc>
<defs><marker id="hl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="dg-arrow" d="M0 0L10 5L0 10z"/></marker></defs>
<rect class="dg-box" x="1" y="1" width="562" height="328" rx="12" fill="none" stroke-dasharray="6 5" stroke-width="1.5" style="fill: none"/>
<text class="dg-muted" x="20" y="26" font-size="12">Mac Mini, Docker (OrbStack)</text>
<g stroke-width="1.5">
<rect class="dg-box" x="20" y="44" width="184" height="44" rx="8"/>
<rect class="dg-box" x="20" y="100" width="184" height="44" rx="8"/>
<rect class="dg-box" x="20" y="156" width="184" height="44" rx="8"/>
<rect class="dg-box" x="20" y="240" width="184" height="44" rx="8"/>
<rect class="dg-box-accent" x="264" y="44" width="276" height="156" rx="8"/>
<rect class="dg-box-accent" x="264" y="226" width="276" height="72" rx="8"/>
<rect class="dg-box" x="604" y="72" width="154" height="72" rx="8"/>
<rect class="dg-box" x="604" y="226" width="154" height="72" rx="8"/>
</g>
<g font-size="14" text-anchor="middle">
<text class="dg-text" x="112" y="71">Starlink Monitor</text>
<text class="dg-text" x="112" y="127">Outage Logger</text>
<text class="dg-text" x="112" y="183">PH Alerts</text>
<text class="dg-text" x="112" y="267">PDF Toolbox</text>
<text class="dg-text" x="681" y="104">Telegram</text>
<text class="dg-muted" x="681" y="124" font-size="11">one chat for every alert</text>
<text class="dg-text" x="681" y="258">Me</text>
<text class="dg-muted" x="681" y="278" font-size="11">phone and browser</text>
</g>
<g font-size="14">
<text class="dg-text" x="284" y="74">Shared monitoring</text>
<text class="dg-muted" x="284" y="100" font-size="12">Prometheus: metrics</text>
<text class="dg-muted" x="284" y="122" font-size="12">Loki: logs</text>
<text class="dg-muted" x="284" y="144" font-size="12">Alertmanager: alerts</text>
<text class="dg-muted" x="284" y="166" font-size="12">Grafana: dashboards</text>
<text class="dg-text" x="284" y="256">Glance start page</text>
<text class="dg-muted" x="284" y="280" font-size="12">checks every service is up</text>
</g>
<g stroke-width="2" fill="none">
<path class="dg-path" d="M204 66H230M204 122H230M204 178H230M230 66V178M230 122H262" marker-end="url(#hl-arrow)"/>
<path class="dg-path" d="M540 108H602" marker-end="url(#hl-arrow)"/>
<path class="dg-path" d="M540 262H602" marker-end="url(#hl-arrow)"/>
</g>
</svg>
</div>
<figcaption>The whole homelab at a glance. Projects send their metrics, logs and alerts to one shared stack; Telegram and Glance are how I see it.</figcaption>
</figure>

**One alert channel.** Alertmanager sends alerts from every project to a single Telegram chat, and PH Alerts uses the same bot. Whatever breaks, the message lands in the same place, so there's only one thing to watch.

**One place for metrics and logs.** Prometheus collects the numbers (the dish stats, the internet checks and the Outage Logger) and Grafana shows them. Loki keeps the event log, so I can search what happened the same way I'd search logs at work.

**One front door.** Glance is the page my browser opens to. It checks every service and shows whether it's up and how fast it answered, along with the internet status and uptime from the Outage Logger, links to every dashboard, and a few everyday things like the weather, news and markets.

<figure>
<img src="/personal-website/blog/homelab-overview/glance.webp" width="1912" height="844" loading="lazy" alt="Glance start page in dark mode: clock, weather and calendar on the left; the internet online with 35 ms latency and every check passing, 99.94% uptime over 24 hours; a Homelab grid showing Grafana, Outage Logger, PDF Toolbox, Prometheus, Alertmanager, Loki and other services all OK with response times; news below; markets and bookmarks on the right.">
<figcaption>Glance, my start page. The Homelab grid checks every service, and the Internet and Uptime panels come from the Outage Logger.</figcaption>
</figure>

## The rules that keep it manageable

A homelab gets messy fast. A few conventions keep this one easy to look after:

- **Same shape for every project.** Each one has its own folder, a README, a `docker-compose.yml`, and usually a `start.sh` that builds and starts it. Any project starts the same way.
- **Secrets stay out of git.** Only `.env.example` templates are committed. Bot tokens live in `secrets/` folders that are mounted into containers read-only, and data like the outage history stays on the Mac. A `.gitignore` enforces it.
- **The README keeps itself up to date.** The repository's README has a table of every project. A GitHub Action rebuilds it from each project's own README on every push, so adding a project means adding a folder, and the list never goes stale.

## What I took from it

- **Add logging before you need it.** Several of my projects ran with no logging at all. Once one project had a proper monitoring stack, plugging the rest in was the easy part.
- **One alert channel beats many.** If alerts arrive in five different places, you end up checking none of them.
- **Conventions beat cleverness.** Every project starting the same way matters more than any one project being clever.
- **Keep it on your own network.** For personal tools, not being reachable from the internet is the simplest security there is.

## What's next

- **Tailscale,** so I can reach the dashboards away from home without opening anything to the internet.
- **A UPS for the Mini,** so a power cut doesn't take all the monitoring down with it.

Like the Starlink monitor, I built the homelab with AI-assisted development.
