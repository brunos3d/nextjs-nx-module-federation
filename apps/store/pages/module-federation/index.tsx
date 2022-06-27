import Link from 'next/link';
import styles from './styles.module.css';

export function Home() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Store!</h1>

      <Link href="/module-federation/component">component</Link>
      <Link href="/module-fedaration/custom-hook">custom-hook</Link>
    </div>
  );
}

export default Home;
