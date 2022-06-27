import { Button } from 'reactstrap';

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

      <h2>Buttons</h2>

      <div className={styles['board']}>
        <div className={styles['grid']}>
          {colors.map((color) => (
            <Button color={color} key={color}>
              This is a {color} button
            </Button>
          ))}
        </div>
      </div>

      <h2>Outline Buttons</h2>

      <div className={styles['board']}>
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
