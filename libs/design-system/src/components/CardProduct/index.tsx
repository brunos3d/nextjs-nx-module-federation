import { HTMLAttributes } from 'react';
import NextImage from 'next/image';
import cn from 'classnames';

import styles from './styles.module.scss';

export interface CardProductProps extends HTMLAttributes<HTMLDivElement> {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
  tags?: string[];
  price: string;
}

export function CardProduct({
  image,
  title,
  description,
  tags,
  price,
  className,
  ...props
}: CardProductProps) {
  return (
    <div className={cn(styles['card'], className)} {...props}>
      <div className={styles['image-container']}>
        <NextImage
          src={image.src}
          alt={image.alt}
          layout="fill"
          objectFit="cover"
        />

        <div className={styles['title-container']}>
          <span className={styles['title']}>{title}</span>
        </div>
      </div>
      <div className={styles['card-body']}>
        {tags && (
          <ul className={styles['tags']}>
            {tags.map((tag) => (
              <span className={styles['tag']}>{tag}</span>
            ))}
          </ul>
        )}
        <span className={styles['description']}>{description}</span>
      </div>
    </div>
  );
}

export default CardProduct;
