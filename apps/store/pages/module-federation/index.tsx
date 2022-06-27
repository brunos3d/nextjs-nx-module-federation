import Link from 'next/link';
import styles from './styles.module.css';

export function Home() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Store!</h1>

      <Link href="/design-system">design-system</Link>
      <Link href="/module-fedaration">module-fedaration</Link>
    </div>
  );
}

export default Home;
