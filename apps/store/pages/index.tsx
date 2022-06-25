import Link from 'next/link';
import styles from './index.module.css';

export function Page() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Module Federation!</h1>

      <Link href="/module-fedaration/component">component</Link>
      <Link href="/module-fedaration/custom-hook">custom-hook</Link>
    </div>
  );
}

export default Page;
