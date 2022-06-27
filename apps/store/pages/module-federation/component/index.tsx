/* eslint-disable @typescript-eslint/no-var-requires */
import dynamic from 'next/dynamic';
import { useState } from 'react';
import styles from './styles.module.css';

const BuyButton = dynamic<{ children: string; onClick: () => void }>(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore: Cannot find module
  async () => import('checkout/buy-button'),
  {
    ssr: false,
  }
);

export function Page() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className={styles['container']}>
      <h1>Welcome to Store!</h1>

      <p>
        Item Count: <strong>{count}</strong>
      </p>
      <BuyButton onClick={() => setCount((i) => i + 1)}>Add to Cart</BuyButton>
      <BuyButton onClick={() => setCount(0)}>Clear Cart</BuyButton>
    </div>
  );
}

export default Page;
