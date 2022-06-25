/* eslint-disable @typescript-eslint/no-var-requires */
import dynamic from 'next/dynamic';
import styles from './index.module.css';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Cannot find module
const BuyButton = dynamic(async () => import('checkout/buy-button'), {
  ssr: false,
});

type UseAddToCartHookType = () => UseAddToCartHookResultType;

type UseAddToCartHookResultType = {
  itemsCount: number;
  addToCart: () => void;
  clearCart: () => void;
};

let useAddToCartHook: UseAddToCartHookType;

if (process.browser) {
  useAddToCartHook = require('checkout/useAddToCartHook').default;
}

export function Home() {
  let cartHook = {} as UseAddToCartHookResultType;

  if (process.browser) {
    cartHook = useAddToCartHook();
  }
  const { itemsCount, addToCart, clearCart } = cartHook;

  return (
    <div className={styles['container']}>
      <h1>Welcome to Store!</h1>

      <p>
        Item Count: <strong>{itemsCount}</strong>
      </p>
      <BuyButton onClick={addToCart}>Add to Cart</BuyButton>
      <BuyButton onClick={clearCart}>Clear Cart</BuyButton>
    </div>
  );
}

export default Home;
