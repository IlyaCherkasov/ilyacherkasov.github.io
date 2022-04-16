import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MOutlineButton } from 'components/OutlineButton';
import PrimaryButton from 'components/PrimaryButton';
import socialLinks from 'helpers/socialLinks';
import useCv from 'helpers/useCv';
import MePng from 'assets/main.png';

const Container = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 100vh;

  ${({ theme }) => theme.media.mobile} {
    height: auto;
  }
`;

const Greetings = styled(motion.h5)`
  margin: 5rem 0 0;
  font-weight: 500;
`;

const Name = styled(motion.h1)`
  font-weight: 500;
  font-size: 2.5rem;
`;

const Position = styled(motion.h5)`
  font-weight: 500;
  opacity: 0.6;
`;

const CtaButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;

  ${({ theme }) => theme.media.mobile} {
    overflow: hidden;
  }
`;

const Me = styled(motion.div)`
  width: calc(100% - 2rem);
  max-width: 20rem;
  max-height: 28rem;
  aspect-ratio: 20/28;
  margin-top: 2rem;
  padding: 1rem 2rem 0.5rem 0;
  overflow: hidden;
  background: linear-gradient(${({ theme }) => theme.colors.primary}, transparent);
  border-radius: 100vh 100vh 0 0;
`;

const Socials = styled(motion.div)`
  position: absolute;
  bottom: 3rem;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  width: 20px;

  ::after {
    width: 1px;
    height: 2rem;
    background: ${({ theme }) => theme.colors.primary};
    content: "";
  }

  ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;

const ScrollDown = styled(motion.a)`
  position: absolute;
  right: 0;
  bottom: 4rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.9rem;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.gold};
  }

  ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;

const Header = () => (
  <Container>
    <Greetings
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      Hello, I&apos;m
    </Greetings>
    <Name
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ default: { duration: 1 } }}
    >
      Ilya Cherkasov
    </Name>
    <Position
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, default: { duration: 1 } }}
    >
      JavaScript Developer
    </Position>
    <CtaButtons>
      <MOutlineButton
        name="Download CV"
        link={useCv()}
        downloadFileName="Ilya Cherkasov CV"
        variants={{
          hidden: { x: -100, opacity: 0 },
          show: { x: 0, opacity: 1, transition: { delay: 1.2, duration: 1 } },
          hover: { scale: 1.2 },
        }}
        initial="hidden"
        animate="show"
        whileHover="hover"
        whileTap="hover"
      />
      <PrimaryButton
        name="Let's talk"
        link="#contact"
        variants={{
          hidden: { x: 100, opacity: 0 },
          show: { x: 0, opacity: 1, transition: { delay: 1.2, duration: 1 } },
          hover: { scale: 1.2 },
        }}
        initial="hidden"
        animate="show"
        whileHover="hover"
        whileTap="hover"
      />
    </CtaButtons>
    <Me
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <img src={MePng} alt="me" />
    </Me>
    <Socials
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {socialLinks.map((social) => (
        <motion.a
          href={social.url}
          target="_blank"
          rel="noreferrer"
          key={social.label}
          variants={{ hover: { scale: 1.5 } }}
          whileHover="hover"
          whileTap="hover"
        >
          {social.icon}
        </motion.a>
      ))}
    </Socials>
    <ScrollDown
      href="#contact"
      variants={{
        hidden: { x: 80, opacity: 0, rotate: '90deg' },
        appear: {
          x: 30, opacity: 1, rotate: '90deg', transition: { duration: 1 },
        },
        hover: { scale: 1.5 },
      }}
      initial="hidden"
      animate="appear"
      whileHover="hover"
      whileTap="hover"
    >
      Scroll Down
    </ScrollDown>
  </Container>
);

export default Header;
