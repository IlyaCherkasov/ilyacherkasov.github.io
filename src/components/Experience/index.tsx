import { motion } from 'framer-motion';

import Section from 'components/Section';
import SkillItem from 'components/SkillItem';

import styles from './styles.module.css';

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
    { name: 'KnexJS', level: 'Intermediate' },
    { name: 'PostgreSQL', level: 'Intermediate' },
  ],
};

const Experience = () => (
  <Section
    id='experience'
    header='My Experience'
    subheader='What Skills I Have'
  >
    <div className={styles.container}>
      {Object.keys(skills).map((skill, index) => (
        <motion.div
          key={skill}
          className={styles.developmentBlock}
          variants={{
            hidden: { x: index ? 100 : -100, opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { duration: 1 } },
          }}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.05 }}
        >
          <h3>{skill} Development</h3>
          <div className={styles.skills}>
            {skills[skill].map((skillItem) => (
              <SkillItem
                name={skillItem.name}
                level={skillItem.level}
                key={skillItem.name}
              />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);

export default Experience;
