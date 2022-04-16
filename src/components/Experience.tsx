import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from 'components/Section';
import SkillItem from 'components/SkillItem';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 2rem;
`;

const DevelopmentBlock = styled(motion.div)`
  flex: 1;
  padding: 2rem 4rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.purple}90;
  border: 1px solid ${({ theme }) => theme.colors.purple}90;
  border-radius: 2rem;
  transition: background-color 0.3s ease-in-out;

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
    { name: 'JavaScript', level: 'Experienced' },
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
      {Object.keys(skills).map((skill, index) => (
        <DevelopmentBlock
          key={skill}
          variants={{
            hidden: { x: (index ? 100 : -100), opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { duration: 1 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.05 }}
        >
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
