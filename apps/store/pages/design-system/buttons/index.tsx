import { Button } from 'reactstrap';
import cn from 'classnames';

import styles from './styles.module.css';

const colors = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
  'white',
];

export function Page() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Buttons!</h1>
      <p className="mt-2">
        This page shows the use of 3rd party components like{' '}
        <a href="https://github.com/reactstrap/reactstrap">reactstrap</a>
      </p>

      <h3 className="mt-5">Buttons</h3>

      <div className={cn(styles['board'], 'mt-2')}>
        <div className={styles['grid']}>
          {colors.map((color) => (
            <Button color={color} key={color}>
              This is a {color} button
            </Button>
          ))}
        </div>
      </div>

      <h3 className="mt-5">Outline Buttons</h3>

      <div className={cn(styles['board'], 'mt-2')}>
        <div className={styles['grid']}>
          {colors.map((color) => (
            <Button color={color} outline key={color}>
              This is a {color} button
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
