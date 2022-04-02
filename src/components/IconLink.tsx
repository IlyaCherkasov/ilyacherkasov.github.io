import styled from 'styled-components';

const Button = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.gold};
  }

  svg {
    width: 1rem;
    aspect-ratio: 1;
    fill: currentColor;
  }
`;

interface Props {
  children: JSX.Element,
  link: string,
}

const IconLink = ({ children, link }: Props) => (
  <Button href={link} target="_blank">{ children }</Button>
);

export default IconLink;
