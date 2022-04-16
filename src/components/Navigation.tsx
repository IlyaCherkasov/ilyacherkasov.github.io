import styled from 'styled-components';
import navigation from 'helpers/navigation';
import { motion } from 'framer-motion';
import theme from '../helpers/theme';

const NavBar = styled(motion.nav)`
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
  background: ${({ theme }) => theme.colors.black}55;
  border-radius: 100vh;
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
  z-index: 1;
`;

const Bubble = styled(motion.div)`
  position: absolute;
  width: 2.1rem;
  aspect-ratio: 1 / 1;
  background: ${({ theme }) => theme.colors.purple};
  border-radius: 100vh;
`;

interface Props {
  activeSection: string,
}

const difference = window.innerWidth > theme.breakpoints.mobile ? 62 : 52;
const positions: Record<string, number> = {
  home: 0,
  about: difference,
  experience: difference * 2,
  companies: difference * 2,
  possibilities: difference * 3,
  portfolio: difference * 3,
  contact: difference * 4,
};

const Navigation = ({ activeSection }: Props) => (
  <NavBar
    initial={{ y: 100, opacity: 0, x: '-50%' }}
    animate={{
      y: 0,
      opacity: 1,
      x: '-50%',
      transition: { delay: 0.5, duration: 1 },
    }}
  >
    <Bubble
      initial={{ x: 0 }}
      animate={{ x: positions[activeSection], transition: { duration: 0.5 } }}
    />
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
