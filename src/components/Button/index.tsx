import { AnchorHTMLAttributes, RefObject } from 'react';

import clsx from 'clsx';

import styles from './styles.module.css';

const Button = (
  props: AnchorHTMLAttributes<HTMLAnchorElement> & {
    ref?: RefObject<HTMLAnchorElement>;
  },
) => (
  <a {...props} className={clsx(props.className, styles.button)}>
    {props.children}
  </a>
);

export default Button;
