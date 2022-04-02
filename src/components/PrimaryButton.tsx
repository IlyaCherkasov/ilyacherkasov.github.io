import styled from 'styled-components';
import Button from 'components/Button';

const LinkButton = styled(Button)`
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.primary};
`;

interface Props {
  name: string,
  link: string,
}

const PrimaryButton = ({ name, link }: Props) => (
  <LinkButton href={link}>{ name }</LinkButton>
);

export default PrimaryButton;
