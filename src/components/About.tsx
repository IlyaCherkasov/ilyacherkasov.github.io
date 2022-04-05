import styled from 'styled-components';
import Section from 'components/Section';
import Img from 'assets/about.jpeg';
import { ReactComponent as MedalSvg } from 'assets/medal.svg';
import { ReactComponent as UserSvg } from 'assets/users.svg';
import { ReactComponent as ProjectsSvg } from 'assets/projects.svg';
import PrimaryButton from 'components/PrimaryButton';
import Tile from 'components/Tile';
import useWorkYears from 'helpers/useWorkYears';

const Container = styled.div`
  display: grid;
  grid-template-columns: 35% 50%;
  gap: 15%;
  width: 100%;
  text-align: left;

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 100%;
    gap: 5%;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  width: 80%;
  aspect-ratio: 1;
  margin: auto;
  background: linear-gradient(45deg, transparent, ${({ theme }) => theme.colors.primary}, transparent);
  border-radius: 2rem;

  img {
    border-radius: 2rem;
    transform: rotate(10deg);
    transition: transform 0.3s ease-in-out;

    :hover {
      transform: rotate(0);
    }
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;

  ${({ theme }) => theme.media.mobile} {
    align-items: center;
  }
`;

const Tiles = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  width: 100%;

  ${({ theme }) => theme.media.mobile} {
    width: calc(100% - 2rem);
    margin: 0 1rem;
  }
`;

const About = () => {
  const workYears = useWorkYears();

  return (
    <Section id="about" header="About Me" subheader="Get To Know">
      <Container>
        <ImageContainer>
          <img src={Img} alt="" />
        </ImageContainer>
        <ContentContainer>
          <Tiles>
            <Tile name="Experience" description={`${workYears}+ Years Working`}><MedalSvg /></Tile>
            <Tile name="People" description="No Angry Teams"><UserSvg /></Tile>
            <Tile name="Projects" description="2 Launched"><ProjectsSvg /></Tile>
          </Tiles>
          I&apos;m a graduate of ITMO University. My bachelor degree was in sphere of Information
          Technologies and Programming at department of Information Systems.
          Started my career in university with small startup where I developed myself as
          a professional and a good teammate. In my spare time love to throw some discs
          because my hobby is disc-golf and programming of course. Also my hobbies are intertwined
          into development site for Russian Disc-Golf Association to evolve disc-golf into
          something more than hobby for all professional players.
          <PrimaryButton name="Let's talk" link="#contact" />
        </ContentContainer>
      </Container>
    </Section>
  );
};

export default About;
