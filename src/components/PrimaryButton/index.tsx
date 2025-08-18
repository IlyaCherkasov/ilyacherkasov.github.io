import React from 'react';

import { motion } from 'framer-motion';

import Button from 'components/Button';

import styles from './styles.module.css';

interface Props {
  name: string;
  link: string;
  target?: string;
  ref?: React.RefObject<HTMLAnchorElement>;
}

const PrimaryButton = ({ name, link, target, ref }: Props) => (
  <Button className={styles.linkButton} href={link} target={target} ref={ref}>
    {name}
  </Button>
);

PrimaryButton.defaultProps = {
  target: '_self',
};

export default motion(PrimaryButton);
