import styles from './styles.module.css';

type UseAddToCartHookType = () => UseAddToCartHookResultType;

type UseAddToCartHookResultType = {
  itemsCount: number;
  addToCart: () => void;
  clearCart: () => void;
};

let useAddToCartHook = (() => ({})) as UseAddToCartHookType;

if (process.browser) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  useAddToCartHook = require('checkout/useAddToCartHook').default;
}

export function Page() {
  const { itemsCount, addToCart, clearCart } =
    useAddToCartHook() as UseAddToCartHookResultType;

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

Page.getInitialProps = async (/*ctx*/) => {
  return {};
};

export default Page;
