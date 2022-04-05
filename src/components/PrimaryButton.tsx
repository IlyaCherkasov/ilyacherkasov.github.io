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

const PrimaryButton = ({ name, link, target }: Props) => (
  <LinkButton href={link} target={target}>{ name }</LinkButton>
);

PrimaryButton.defaultProps = {
  target: '_self',
};

export default PrimaryButton;
