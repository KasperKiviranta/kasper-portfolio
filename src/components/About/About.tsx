import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2>About Me</h2>
      <div className={styles.grid}>
        <div className={styles.text}>
          <p>
            My name is Kasper and I&apos;m a student from Finland. I&apos;ve been exploring the world of coding since 2020, 
            focusing on creating functional and interesting projects.
          </p>
          <p>
            I am currently deep-diving into Website Development, aiming to master the latest technologies and 
            best practices. My goal is to finish my school degree on time while building a strong portfolio of work.
          </p>
        </div>
        <div className={styles.skills}>
          <h3>Skills</h3>
          <ul className={styles.skillList}>
            <li>JavaScript</li>
            <li>HTML5 / CSS3</li>
            <li>React / Next.js</li>
            <li>Python</li>
            <li>Node.js</li>
            <li>GameMaker</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
