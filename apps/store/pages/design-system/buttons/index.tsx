import {
  Button,
  baseColors,
  BaseColor,
} from '@nextjs-nx-module-federation/design-system';

import styles from './styles.module.css';

export function Page() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Design System!</h1>

      <h2>Buttons</h2>

      <div className={styles['grid']}>
        {Object.keys(baseColors).map((color: BaseColor) => (
          <Button color={color} key={color}>
            This is a {color} button
          </Button>
        ))}
      </div>

      <h2>Outline Buttons</h2>

      <div className={styles['grid']}>
        {Object.keys(baseColors).map((color: BaseColor) => (
          <Button color={color} outline key={color}>
            This is a {color} button
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Page;
