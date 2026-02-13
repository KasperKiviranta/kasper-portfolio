const GITHUB_USERNAME = 'KasperKiviranta';
const CACHE_KEY = 'github_projects_cache';
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

export interface GithubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  updated_at: string;
}

export async function fetchGithubProjects(forceRefresh = false): Promise<GithubRepo[]> {
  if (typeof window !== 'undefined' && !forceRefresh) {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < CACHE_DURATION) {
        return data;
      }
    }
  }

  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
    if (!response.ok) {
      throw new Error('Failed to fetch projects from GitHub');
    }
    const data = await response.json();
    
    // Filter out forks and profile README
    const filteredData = data.filter((repo: any) => !repo.fork && repo.name !== GITHUB_USERNAME);

    if (typeof window !== 'undefined') {
      localStorage.setItem(CACHE_KEY, JSON.stringify({
        data: filteredData,
        timestamp: Date.now()
      }));
    }

    return filteredData;
  } catch (error) {
    console.error('GitHub API Error:', error);
    throw error;
  }
}
