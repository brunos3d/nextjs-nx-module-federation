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
      <p className="mt-2">
        This page is a demo of Module Federation components
      </p>

      <p className="mt-5">
        Item Count: <strong>{count}</strong>
      </p>

      <div className="row mt-3">
        <div className="col">
          <BuyButton onClick={() => setCount((i) => i + 1)}>
            Add to Cart
          </BuyButton>
        </div>
        <div className="col ml-3">
          <BuyButton onClick={() => setCount(0)}>Clear Cart</BuyButton>
        </div>
      </div>
    </div>
  );
}

export default Page;
