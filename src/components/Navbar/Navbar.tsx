import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Kasper.
        </Link>
        <ul className={styles.navLinks}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/#about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
