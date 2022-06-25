import Link from 'next/link';

import styles from './styles.module.css';

export function Page() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Design System components!</h1>

      <div className={styles['grid']}>
        <Link href="/design-system/buttons">buttons</Link>
        <Link href="/design-system/card-product">card-product</Link>
      </div>
    </div>
  );
}

export default Page;
