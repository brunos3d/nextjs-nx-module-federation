import { useState } from 'react';
import BuyButton from '../components/buy-button/buy-button';
import styles from './index.module.css';

export function Home() {
  const [cartItems, setCartItems] = useState<number>(0);

  return (
    <div className={styles['container']}>
      <h1>Welcome to Checkout!</h1>

      <p>
        Cart Items: <strong>{cartItems}</strong>
      </p>

      <BuyButton onClick={() => setCartItems((x) => x + 1)} />
    </div>
  );
}

export default Home;
