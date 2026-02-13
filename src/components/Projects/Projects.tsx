import Link from 'next/link';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

const projects = [
  {
    title: "JS-Habit-Tracker",
    description: "A simple and effective habit tracker built with vanilla JavaScript to help users build and maintain daily routines.",
    language: "JavaScript",
    link: "https://github.com/KasperKiviranta/JS-Habit-Tracker"
  },
  {
    title: "AJAX Commuter Traffic APP",
    description: "A real-time commuter traffic application utilizing AJAX to fetch and display live traffic data for better route planning.",
    language: "JavaScript",
    link: "https://github.com/KasperKiviranta/Project-2-AJAX-Commuter-Traffic-APP"
  },
  {
    title: "Daily Todo List",
    description: "A clean and functional todo list application written in Python to manage daily tasks efficiently.",
    language: "Python",
    link: "https://github.com/KasperKiviranta/Daily-todo-list"
  }
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Featured Projects</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <div className={styles.viewMore}>
        <Link href="/projects" className={styles.viewMoreButton}>
          View All GitHub Projects
        </Link>
      </div>
    </section>
  );
};

export default Projects;
