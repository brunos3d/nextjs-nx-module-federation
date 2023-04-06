/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.svg' {
  const content: any;
  export const ReactComponent: any;
  export default content;
}

declare module 'checkout/useAddToCartHook' {
  export * from '@checkout/hooks/useAddToCart';
  export { default } from '@checkout/hooks/useAddToCart';
}

declare module 'checkout/buy-button' {
  export * from '@checkout/components/buy-button/buy-button';
  export { default } from '@checkout/components/buy-button/buy-button';
}
