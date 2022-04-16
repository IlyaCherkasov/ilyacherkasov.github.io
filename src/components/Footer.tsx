import styled from 'styled-components';
import { motion } from 'framer-motion';
import navigation from 'helpers/navigation';
import socialLinks from 'helpers/socialLinks';

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  width: 100%;
  padding: 2rem 0 5rem;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.primary};
`;

const Nav = styled.nav`
  display: flex;
  flex-flow: row wrap;
  gap: 1.5rem;
  justify-content: center;

  a {
    color: ${({ theme }) => theme.colors.black};

    :hover {
      color: ${({ theme }) => theme.colors.gold};
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1.5rem;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.black};
    border-radius: 0.5rem;
    transition: color 0.3s ease-in-out;

    :hover {
      color: ${({ theme }) => theme.colors.gold};
    }
  }
`;

const extendedNavigation = [
  navigation[0],
  navigation[1],
  navigation[2],
  {
    name: 'companies',
    title: 'Companies',
  },
  navigation[3],
  {
    name: 'portfolio',
    title: 'Portfolio',
  },
  navigation[4],
];

const Footer = () => (
  <Container
    variants={{
      hidden: { y: 100, opacity: 0 },
      show: { y: 0, opacity: 1, transition: { duration: 1 } },
    }}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    <h2>CHERKASIK</h2>
    <Nav>
      {extendedNavigation.map((item) => (
        <motion.a
          href={`#${item.name}`}
          key={item.name}
          variants={{ hover: { scale: 1.5 } }}
          whileHover="hover"
          whileTap="hover"
        >
          {item.title}
        </motion.a>
      ))}
    </Nav>
    <SocialLinks>
      {socialLinks.map((link) => (
        <motion.a
          key={link.label}
          href={link.url}
          title={link.label}
          target="_blank"
          rel="noreferrer"
          variants={{ hover: { scale: 1.5 } }}
          whileHover="hover"
          whileTap="hover"
        >
          {link.icon}
        </motion.a>
      ))}
    </SocialLinks>
    ©Ilya Cherkasov
  </Container>
);

export default Footer;
