import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 7rem;
`;

const Greetings = styled.h5`
  margin: 0;
  font-weight: bold;
  font-size: 1rem;
`;

const Name = styled.h1`
  margin: 0;
  font-weight: bold;
  font-size: 3rem;
`;

const Position = styled.h3`
  margin: 0;
  font-weight: normal;
  font-size: 1rem;
`;

const Header = () => (
  <Container>
    <Greetings>Hello, I&apos;m</Greetings>
    <Name>Ilya Cherkasov</Name>
    <Position>JavaScript Developer</Position>
  </Container>
);

export default Header;
