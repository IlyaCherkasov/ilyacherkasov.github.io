import styled from 'styled-components';
import Section from 'components/Section';
import { ReactComponent as CheckSvg } from 'assets/simple-check.svg';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 3rem;
`;

const Possibility = styled.div`
  display: flex;
  flex: 1;
  flex-flow: column nowrap;
  height: min-content;
  padding: 0 0 1rem;
  background: ${({ theme }) => theme.colors.purple}90;
  border: 1px solid ${({ theme }) => theme.colors.purple}90;
  border-radius: 0 0 2rem 2rem;
  transition: background 0.3s ease-in-out;

  ul {
    display: flex;
    flex-flow: column wrap;
    gap: 1rem;
    padding: 0;
    list-style: none;
  }

  li {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0 2rem;
    text-align: left;
  }

  svg {
    margin: 0.4rem 1rem 0 0;
    fill: ${({ theme }) => theme.colors.primary};
  }

  :hover {
    background: none;
  }
`;

const Header = styled.h4`
  padding: 1.5rem;
  color: ${({ theme }) => theme.colors.purple};
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 0 0 2rem 2rem;
`;

const possibilities: Record<string, Array<string>> = {
  'CI/CD': [
    'Automatization based on Github Actions',
    'Automatization based on BitBucket Pipelines',
    'Configuring CodeClimate',
    'Docker-based deployment',
  ],
  'Web Development': [
    'Creating HTML layout of website from prepared design',
    'Animating application',
    'Creating single-page React application',
    'Creating React application with routing',
    'Create NodeJS backend with Express',
    'Create JWT authentication system',
    'Dockerizing of web application',
    'Dockerizing of backend application',
  ],
  'Database Architecture': [
    'Creating architecture of database based on needed information',
    'Creating database based on architecture',
  ],
};

const Possibilities = () => (
  <Section id="possibilities" header="Services" subheader="What I Can Do For You">
    <Container>
      {Object.keys(possibilities).map((possibility) => (
        <Possibility key={possibility}>
          <Header>{possibility}</Header>
          <ul>
            {possibilities[possibility].map((item) => (
              <li key={item}>
                <CheckSvg />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </Possibility>
      ))}
    </Container>
  </Section>
);

export default Possibilities;
