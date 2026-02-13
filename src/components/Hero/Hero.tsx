import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m <span className={styles.highlight}>Kasper Kiviranta</span></h1>
        <p className={styles.subtitle}>
          Student & Web Developer from Finland.
        </p>
        <p className={styles.description}>
          Building modern, responsive web experiences since 2020.
        </p>
        <Link href="/projects" className={styles.cta}>View My Work</Link>
      </div>
    </section>
  );
};

export default Hero;
