import styled from 'styled-components';
import Section from 'components/Section';
import Img from 'assets/about.jpeg';

const Header = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.7rem;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 35% 50%;
  gap: 15%;
  width: 100%;
  margin-top: 1.5rem;
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

const ContentContainer = styled.div``;

const About = () => (
  <Section id="about">
    <h5>Get To Know</h5>
    <Header>About Me</Header>
    <Container>
      <ImageContainer>
        <img src={Img} alt="" />
      </ImageContainer>
      <ContentContainer>
        content
      </ContentContainer>
    </Container>
  </Section>
);

export default About;
