import styled, { css } from 'styled-components';
import { ReactComponent as HomeSvg } from 'assets/home.svg';
import { ReactComponent as ProfileSvg } from 'assets/profile.svg';
import { ReactComponent as ExperienceSvg } from 'assets/experience.svg';
import { ReactComponent as PossibilitiesSvg } from 'assets/possibilities.svg';
import { ReactComponent as ContactSvg } from 'assets/contact.svg';

const NavBar = styled.nav`
  position: fixed;
  bottom: 1.5rem;
  left: 50%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  padding: 0.5rem 1.5rem;
  background: rgb(0 0 0 / 30%);
  border-radius: 100vh;
  transform: translateX(-50%);
  backdrop-filter: blur(15px);
`;

const NavItem = styled.a<{active?: boolean}>`
  padding: 0.2rem 0.55rem;
  color: ${({ theme }) => theme.colors.brightLilac};
  border-radius: 100vh;
  ${(props) => (props.active
    ? css`background: ${({ theme }) => theme.colors.purple};`
    : ''
  )}
`;

interface Props {
  activeSection: string,
}

const navigationItems = [
  {
    name: '',
    icon: <HomeSvg />,
    title: 'Home',
  },
  {
    name: 'about',
    icon: <ProfileSvg />,
    title: 'About',
  },
  {
    name: 'experience',
    icon: <ExperienceSvg />,
    title: 'Experience',
  },
  {
    name: 'possibilities',
    icon: <PossibilitiesSvg />,
    title: 'Possibilities',
  },
  {
    name: 'contact',
    icon: <ContactSvg />,
    title: 'Contact',
  },
];

const Navigation = ({ activeSection }: Props) => (
  <NavBar>
    {navigationItems.map((item) => (
      <NavItem
        href={`#${item.name}`}
        title={item.title}
        key={item.title}
        active={activeSection === item.name}
      >
        {item.icon}
      </NavItem>
    ))}
  </NavBar>
);

export default Navigation;
