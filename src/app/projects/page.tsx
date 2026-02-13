'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import ProjectCard from '@/components/Projects/ProjectCard';
import { fetchGithubProjects, GithubRepo } from '@/lib/github';
import styles from './ProjectsPage.module.css';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const loadProjects = async (force = false) => {
    try {
      if (force) setRefreshing(true);
      else setLoading(true);
      
      setError(null);
      const data = await fetchGithubProjects(force);
      setProjects(data);
    } catch (err) {
      setError('Failed to load projects. Please try again later.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <main>
      <Navbar />
      <section className={styles.container}>
        <div className={styles.header}>
          <h1>My GitHub Projects</h1>
          <button 
            onClick={() => loadProjects(true)} 
            className={styles.refreshButton}
            disabled={refreshing || loading}
          >
            {refreshing ? 'Refreshing...' : 'Refresh List'}
          </button>
        </div>

        {error && <p className={styles.error}>{error}</p>}

        {loading ? (
          <div className={styles.loader}>Loading projects...</div>
        ) : (
          <div className={styles.grid}>
            {projects.map((repo) => (
              <ProjectCard 
                key={repo.id}
                title={repo.name}
                description={repo.description || 'No description provided.'}
                language={repo.language || 'Various'}
                link={repo.html_url}
              />
            ))}
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}
