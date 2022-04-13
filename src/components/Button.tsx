import styled from 'styled-components';

const Button = styled.a`
  width: max-content;
  padding: 0.5rem 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 0.4rem;
  cursor: pointer;
  transition:
    color 0.3s ease-in-out,
    background 0.3s ease-in-out,
    border-color 0.3s ease-in-out;

  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.black};
    background: ${({ theme }) => theme.colors.gold};
    border-color: transparent;
  }
`;

export default Button;
