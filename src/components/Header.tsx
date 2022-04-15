import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MOutlineButton } from 'components/OutlineButton';
import { MPrimaryButton } from 'components/PrimaryButton';
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
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      />
      <MPrimaryButton
        name="Let's talk"
        link="#contact"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
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
        <a
          href={social.url}
          target="_blank"
          rel="noreferrer"
          key={social.label}
        >
          {social.icon}
        </a>
      ))}
    </Socials>
    <ScrollDown
      href="#contact"
      initial={{ x: 80, opacity: 0, rotate: '90deg' }}
      animate={{ x: 30, opacity: 1, rotate: '90deg' }}
      transition={{ duration: 1 }}
    >
      Scroll Down
    </ScrollDown>
  </Container>
);

export default Header;
