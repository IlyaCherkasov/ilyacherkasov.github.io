import styled from 'styled-components';
import OutlineButton from 'components/OutlineButton';
import PrimaryButton from 'components/PrimaryButton';
import useCv from 'helpers/useCv';
import MePng from 'assets/main.png';
import { ReactComponent as GithubSvg } from 'assets/github.svg';
import { ReactComponent as LinkedinSvg } from 'assets/linkedin.svg';
import { ReactComponent as TelegramSvg } from 'assets/telegram.svg';

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

const Greetings = styled.h5`
  margin: 5rem 0 0;
  font-weight: 500;
`;

const Name = styled.h1`
  font-weight: 500;
  font-size: 2.5rem;
`;

const Position = styled.h5`
  font-weight: 500;
  opacity: 0.6;
`;

const CtaButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
`;

const Me = styled.div`
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

const Socials = styled.div`
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

const ScrollDown = styled.a`
  position: absolute;
  right: 0;
  bottom: 4rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.9rem;
  transform: translateX(40%) rotate(90deg);
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.gold};
  }

  ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;

const socialLinks = [
  {
    label: 'telegram',
    url: 'https://t.me/cherkasik',
    icon: <TelegramSvg />,
  },
  {
    label: 'linkedin',
    url: 'https://linkedin.com/in/cherkasik',
    icon: <LinkedinSvg />,
  },
  {
    label: 'github',
    url: 'https://github.com/IlyaCherkasov',
    icon: <GithubSvg />,
  },
];

const Header = () => (
  <Container>
    <Greetings>Hello, I&apos;m</Greetings>
    <Name>Ilya Cherkasov</Name>
    <Position>JavaScript Developer</Position>
    <CtaButtons>
      <OutlineButton name="Download CV" link={useCv()} downloadFileName="Ilya Cherkasov CV" />
      <PrimaryButton name="Let's talk" link="#contact" />
    </CtaButtons>
    <Me>
      <img src={MePng} alt="me" />
    </Me>
    <Socials>
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
    <ScrollDown href="#contact">Scroll Down</ScrollDown>
  </Container>
);

export default Header;
