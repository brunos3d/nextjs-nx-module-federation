import useAddToCartHook from 'checkout/useAddToCartHook';
import styles from './styles.module.css';

export function Page() {
  const { itemsCount, addToCart, clearCart } = useAddToCartHook();

  return (
    <div className={styles['container']}>
      <h1>Welcome to Custom Hook!</h1>

      <p className="mt-5">
        Item Count: <strong>{itemsCount}</strong>
      </p>

      <div className="flex mt-3">
        <button type="button" className="btn btn-primary" onClick={addToCart}>
          Add to Cart
        </button>
        <button
          type="button"
          className="btn btn-danger ms-2"
          onClick={clearCart}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default Page;
