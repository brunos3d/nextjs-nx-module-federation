import Link from 'next/link';
import styles from './index.module.css';

export function Page() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Next.js, Nx, Module Federation!</h1>

      <Link href="/design-system">design-system</Link>
      <Link href="/module-federation">module-federation</Link>
    </div>
  );
}

export default Page;
