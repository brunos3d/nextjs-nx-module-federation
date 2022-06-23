import dynamic from 'next/dynamic';
import styles from './index.module.css';

const BuyButton = dynamic(
  async () => {
    console.log('aaaaaaaaaaaaa');

    console.log(import('checkout/buy-button'));
    const comp = await import('checkout/buy-button');
    return comp;
  },
  {
    ssr: false,
  }
);

export function Home() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Store!</h1>

      <BuyButton />
    </div>
  );
}

export default Home;
