import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  language: string;
  link: string;
}

const ProjectCard = ({ title, description, language, link }: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.footer}>
        <span className={styles.language}>{language}</span>
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
