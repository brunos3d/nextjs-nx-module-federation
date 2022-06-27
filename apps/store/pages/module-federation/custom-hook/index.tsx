import dynamic from 'next/dynamic';

import styles from './styles.module.css';

const CartCounter = dynamic(
  async () => import('../../../components/CartCounter'),
  {
    ssr: false,
  }
);

export function Page() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Custom Hook!</h1>

      <CartCounter />
    </div>
  );
}

export default Page;
