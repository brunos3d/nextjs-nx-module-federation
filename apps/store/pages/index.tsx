import dynamic from 'next/dynamic';
import styles from './index.module.css';

const BuyButton = dynamic(() => import('checkout/buy-button'), { ssr: false });

export function Home() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Store!</h1>

      <BuyButton />
    </div>
  );
}

export default Home;
