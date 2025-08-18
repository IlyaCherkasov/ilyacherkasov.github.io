import React from 'react';

import { motion } from 'framer-motion';

import Button from 'components/Button';

interface Props {
  name: string;
  link: string;
  ref?: React.RefObject<HTMLAnchorElement>;
  downloadFileName?: string;
  target?: string;
}

const OutlineButton = ({
  name,
  link,
  downloadFileName = '',
  target = '_self',
  ref,
}: Props) =>
  downloadFileName ? (
    <Button href={link} download={downloadFileName} ref={ref}>
      {name}
    </Button>
  ) : (
    <Button href={link} target={target} ref={ref}>
      {name}
    </Button>
  );

export default OutlineButton;

export const MOutlineButton = motion(OutlineButton);
