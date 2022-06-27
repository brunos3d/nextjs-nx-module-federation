/* eslint-disable @typescript-eslint/no-var-requires */
type UseAddToCartHookType = () => UseAddToCartHookResultType;

type UseAddToCartHookResultType = {
  itemsCount: number;
  addToCart: () => void;
  clearCart: () => void;
};

let useAddToCartHook = (() => ({})) as UseAddToCartHookType;

if (process.browser) {
  useAddToCartHook = require('checkout/useAddToCartHook').default;
}

export default function CartCounter() {
  const { itemsCount, addToCart, clearCart } =
    useAddToCartHook() as UseAddToCartHookResultType;

  return (
    <div>
      <p>
        Item Count: <strong>{itemsCount}</strong>
      </p>
      <button onClick={addToCart}>Add to Cart</button>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}
