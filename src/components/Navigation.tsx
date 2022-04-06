import styled, { css } from 'styled-components';
import navigation from 'helpers/navigation';

const NavBar = styled.nav`
  position: fixed;
  bottom: 1.5rem;
  left: 50%;
  z-index: 1000;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  max-width: 14.5rem;
  align-items: center;
  padding: 0.5rem 1.5rem;
  background: rgb(0 0 0 / 30%);
  border-radius: 100vh;
  transform: translateX(-50%);
  backdrop-filter: blur(15px);
  transition: gap 0.3s ease-in-out;

  ${({ theme }) => theme.media.mobile} {
    gap: 0.5rem;
    max-width: 12.5rem;
  }
`;

const NavItem = styled.a<{active?: boolean}>`
  display: flex;
  height: 1rem;
  aspect-ratio: 1;
  padding: 0.55rem;
  color: ${({ theme }) => theme.colors.brightLilac};
  border-radius: 100vh;
  ${(props) => (props.active
    ? css`background: ${({ theme }) => theme.colors.purple};`
    : ''
  )}
  transition: background 0.3s ease-in-out;
`;

interface Props {
  activeSection: string,
}

const Navigation = ({ activeSection }: Props) => (
  <NavBar>
    {navigation.map((item) => (
      <NavItem
        href={`#${item.name}`}
        title={item.title}
        key={item.title}
        active={activeSection === item.name || activeSection === item.additional}
      >
        {item.icon}
      </NavItem>
    ))}
  </NavBar>
);

export default Navigation;
