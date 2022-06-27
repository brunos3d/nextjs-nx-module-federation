import { CardProduct } from '@nextjs-nx-module-federation/design-system';
import type { CardProductProps } from '@nextjs-nx-module-federation/design-system';
import cn from 'classnames';

import styles from './styles.module.css';

const products: Omit<CardProductProps, 'onClick'>[] = [
  {
    image: {
      src: '/assets/products/hamburguer.jpg',
      alt: 'Photo of a hamburger on a wooden board with tomato, lettuce and cheese.',
    },
    tags: ['cheese', 'salad', 'tomato', 'burguer'],
    price: 'U$ 777,99',
    title: 'All-American Cheeseburger',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa animi quisquam suscipit consequatur eligendi illo, pariatur quia dignissimos.',
  },
  {
    image: {
      src: '/assets/products/pizza.jpg',
      alt: 'Photo of a pizza on a wooden board.',
    },
    tags: ['beef', 'tomato', 'cheese', 'basil'],
    price: 'U$ 99,99',
    title: 'Big Pizza',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora fugiat fugit rerum quam illo exercitationem totam, quisquam doloribus.',
  },
  {
    image: {
      src: '/assets/products/mac-and-cheese.jpg',
      alt: 'Mac and cheese in a glass bowl.',
    },
    tags: ['macaroni', 'cheddar', 'cheese'],
    price: 'U$ 99,99',
    title: 'Big Pizza',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora fugiat fugit rerum quam illo exercitationem totam, quisquam doloribus.',
  },
];

export function Page() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Card Product!</h1>
      <p className="mt-2">
        This page shows the usage of components held in an{' '}
        <a href="https://nx.dev/structure/library-types">Nx Library</a>
      </p>

      <div className={cn(styles['grid'], 'mt-5')}>
        {products.map((product: CardProductProps) => (
          <CardProduct
            className={styles['card']}
            {...product}
            onClick={() => alert(`Added ${product.title} to cart`)}
            key={product.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Page;
