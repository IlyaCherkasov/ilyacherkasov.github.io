import { ForwardedRef, forwardRef } from 'react';

import { motion } from 'framer-motion';

import Button from 'components/Button';

interface Props {
  name: string,
  link: string,
  downloadFileName?: string,
  target?: string,
}

const OutlineButton = forwardRef(({
  name, link, downloadFileName, target,
}: Props, ref: ForwardedRef<HTMLAnchorElement>) => (
  downloadFileName
    ? (<Button href={link} download={downloadFileName} ref={ref}>{ name }</Button>)
    : (<Button href={link} target={target} ref={ref}>{ name }</Button>)
));

OutlineButton.defaultProps = {
  downloadFileName: '',
  target: '_self',
};

export default OutlineButton;

export const MOutlineButton = motion(OutlineButton);
