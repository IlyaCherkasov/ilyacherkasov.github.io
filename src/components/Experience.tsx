import styled from 'styled-components';
import Section from 'components/Section';
import SkillItem from './SkillItem';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 2rem;
  padding: 0 1rem;
`;

const DevelopmentBlock = styled.div`
  flex: 1;
  padding: 2rem 4rem;
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.purple}90;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.purple}90;
  transition: background-color 0.3s ease-in-out;

  :hover {
    background: none;
  }

  h3 {
    color: ${({ theme }) => theme.colors.brightLilac};
  }

  ${({ theme }) => theme.media.mobile} {
    padding: 2rem 3rem;
  }
`;

const Skills = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 2rem;
  margin-top: 1rem;
`;

const skills: Record<string, Array<Record<string, string>>> = {
  Frontend: [
    { name: 'HTML', level: 'Experienced' },
    { name: 'CSS', level: 'Experienced' },
    { name: 'JavaScrypt', level: 'Experienced' },
    { name: 'TypeScript', level: 'Experienced' },
    { name: 'React', level: 'Experienced' },
    { name: 'Redux', level: 'Experienced' },
  ],
  Backend: [
    { name: 'NodeJS', level: 'Intermediate' },
    { name: 'TypeScript', level: 'Intermediate' },
    { name: 'Express', level: 'Intermediate' },
    { name: 'KnexJS', level: 'Beginner' },
    { name: 'PostgreSQL', level: 'Intermediate' },
  ],
};

const Experience = () => (
  <Section id="experience" header="My Experience" subheader="What Skills I Have">
    <Container>
      {Object.keys(skills).map((skill) => (
        <DevelopmentBlock key={skill}>
          <h3>
            {skill}
            {' '}
            Development
          </h3>
          <Skills>
            {skills[skill].map((skillItem) => (
              <SkillItem
                name={skillItem.name}
                level={skillItem.level}
                key={skillItem.name}
              />
            ))}
          </Skills>
        </DevelopmentBlock>
      ))}
    </Container>
  </Section>
);

export default Experience;
