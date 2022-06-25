import { HTMLAttributes } from 'react';
import cn from 'classnames';

import type { BaseColor } from '../../lib/colors';

import styles from './styles.module.scss';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  color?: BaseColor;
  outline?: boolean;
}

export function Button({
  color = 'primary',
  outline = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        styles['button'],
        styles[color],
        {
          [styles['outline']]: outline,
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
