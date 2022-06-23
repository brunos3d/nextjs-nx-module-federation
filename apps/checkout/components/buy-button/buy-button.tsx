import { HTMLAttributes } from 'react';

import styles from './buy-button.module.css';

/* eslint-disable-next-line */
export interface BuyButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export function BuyButton({ children, ...props }: BuyButtonProps) {
  console.log('aaaaaaa');

  return (
    <button className={styles['button']} {...props}>
      {children || `Buy now!`}
    </button>
  );
}

export default BuyButton;
