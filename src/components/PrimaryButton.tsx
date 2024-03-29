import { forwardRef, ForwardedRef } from 'react';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import Button from 'components/Button';

const LinkButton = styled(Button)`
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.primary};
`;

interface Props {
  name: string,
  link: string,
  target?: string,
}

const PrimaryButton = forwardRef((
  { name, link, target }: Props,
  ref: ForwardedRef<HTMLAnchorElement>,
) => (
  <LinkButton href={link} target={target} ref={ref}>{ name }</LinkButton>
));

PrimaryButton.defaultProps = {
  target: '_self',
};

export default motion(PrimaryButton);
