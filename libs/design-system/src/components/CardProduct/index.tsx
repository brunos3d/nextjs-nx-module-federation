import NextImage from 'next/image';
import cn from 'classnames';

import { Card, CardBody, CardText, CardTitle, Badge, Button } from 'reactstrap';
import type { CardProps } from 'reactstrap/types';

import styles from './styles.module.scss';

export interface CardProductProps extends CardProps {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
  tags?: string[];
  price: string;
  onClick: () => void;
}

export function CardProduct({
  image,
  title,
  description,
  tags,
  price,
  className,
  onClick,
  ...props
}: CardProductProps) {
  return (
    <Card className={cn(styles['card'], className)} {...props}>
      <div className={styles['image-container']}>
        <NextImage
          src={image.src}
          alt={image.alt}
          layout="fill"
          objectFit="cover"
        />

        <div className={styles['title-container']}>
          <CardTitle className={styles['title']} tag="h5">
            {title}
          </CardTitle>
        </div>
      </div>
      <CardBody className={styles['card-body']}>
        <CardText className={styles['price']}>{price}</CardText>
        {tags && (
          <ul className={cn(styles['tags'], 'm-0 mt-2')}>
            {tags.map((tag) => (
              <Badge color="info" key={tag}>
                {tag}
              </Badge>
            ))}
          </ul>
        )}
        <CardText className="mt-2">{description}</CardText>
        <Button className="mt-3" color="primary" onClick={onClick}>
          Add to cart
        </Button>
      </CardBody>
    </Card>
  );
}

export default CardProduct;
