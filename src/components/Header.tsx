import styled from 'styled-components';

const Container = styled.header`
  margin-top: 8rem;
`;

const Greetings = styled.h5`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;

const Name = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin: 0;
`;

const Position = styled.h3`
  font-size: 2rem;
  font-weight: normal;
  margin: 0;
`;

const Header = () => (
  <Container>
    <Greetings>Hello, I&apos;m</Greetings>
    <Name>Ilya Cherkasov</Name>
    <Position>JavaScript Developer</Position>
  </Container>
);

export default Header;
