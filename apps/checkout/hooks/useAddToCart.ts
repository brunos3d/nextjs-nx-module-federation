import { useState } from 'react';

export function useAddToCartHook() {
  const [itemsCount, setItemsCount] = useState<number>(0);
  return {
    itemsCount,
    addToCart: () => setItemsCount((i) => i + 1),
    clearCart: () => setItemsCount(0),
  };
}

export default useAddToCartHook;
