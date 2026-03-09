import { useEffect, useState } from "react";

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
}

interface GitHubRepo {
  stargazers_count: number;
  fork: boolean;
  language: string | null;
}

interface Stats {
  repos: number;
  followers: number;
  stars: number;
  topLanguages: string[];
}

const GITHUB_USERNAME = "Ervszzz";

const GitHubStats = () => {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`),
        ]);

        const user: GitHubUser = await userRes.json();
        const repos: GitHubRepo[] = await reposRes.json();

        const stars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);

        const langCount = repos
          .filter((r) => !r.fork && r.language)
          .reduce<Record<string, number>>((acc, r) => {
            acc[r.language!] = (acc[r.language!] || 0) + 1;
            return acc;
          }, {});

        const topLanguages = Object.entries(langCount)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([lang]) => lang);

        setStats({ repos: user.public_repos, followers: user.followers, stars, topLanguages });
      } catch {
        // silently fail — stats are non-critical
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center gap-4 animate-pulse">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-20 w-36 bg-tech-gray/40 rounded-lg border border-tech-cyan/10" />
        ))}
      </div>
    );
  }

  if (!stats) return null;

  const statItems = [
    { label: "Public Repos", value: stats.repos, color: "text-tech-cyan" },
    { label: "Total Stars", value: stats.stars, color: "text-tech-purple" },
    { label: "Followers", value: stats.followers, color: "text-tech-teal" },
  ];

  return (
    <div className="space-y-6">
      {/* Stat cards */}
      <div className="grid grid-cols-3 gap-4">
        {statItems.map(({ label, value, color }) => (
          <div
            key={label}
            className="bg-tech-gray/40 border border-tech-cyan/20 rounded-lg p-4 text-center hover:border-tech-cyan/50 transition-colors duration-300"
          >
            <div className={`text-2xl font-display font-bold ${color}`}>{value}</div>
            <div className="text-tech-light/50 font-tech text-xs mt-1">{label}</div>
          </div>
        ))}
      </div>

      {/* Top languages */}
      {stats.topLanguages.length > 0 && (
        <div>
          <p className="text-tech-light/40 font-tech text-xs mb-3">Top Languages</p>
          <div className="flex flex-wrap gap-2">
            {stats.topLanguages.map((lang) => (
              <span
                key={lang}
                className="px-3 py-1 bg-tech-dark border border-tech-teal/40 text-tech-teal text-xs font-tech rounded hover:border-tech-cyan hover:text-tech-cyan transition-colors duration-200"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      )}

      <a
        href={`https://github.com/${GITHUB_USERNAME}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-tech-light/40 hover:text-tech-cyan font-tech text-xs transition-colors duration-300"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
        View GitHub Profile
      </a>
    </div>
  );
};

export default GitHubStats;
