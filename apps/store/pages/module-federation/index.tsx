import dynamic from 'next/dynamic';
import styles from './index.module.css';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Cannot find module
const BuyButton = dynamic(async () => import('checkout/buy-button'), {
  ssr: false,
});

export function Home() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Store!</h1>

      <BuyButton>Add to Cart</BuyButton>
    </div>
  );
}

export default Home;
