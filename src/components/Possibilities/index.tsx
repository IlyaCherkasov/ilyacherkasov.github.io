import { motion } from 'framer-motion';

import { ReactComponent as CheckSvg } from 'assets/simple-check.svg';
import Section from 'components/Section';

import styles from './styles.module.css';

const possibilities: Record<string, Array<string>> = {
  'CI/CD': [
    'Automatization based on Github Actions',
    'Automatization based on BitBucket Pipelines',
    'Automatization based on Azure Pipelines',
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
    'Single SPA',
  ],
  'Database Architecture': [
    'Creating architecture of database based on needed information',
    'Creating database based on architecture',
  ],
};

const Possibilities = () => (
  <Section
    id='possibilities'
    header='Services'
    subheader='What I Can Do For You'
  >
    <div className={styles.container}>
      {Object.keys(possibilities).map((possibility) => (
        <motion.div
          key={possibility}
          className={styles.possibility}
          variants={{
            hidden: { y: 100, opacity: 0 },
            show: { y: 0, opacity: 1, transition: { duration: 1 } },
            hover: { scale: 1.1 },
          }}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          whileHover='hover'
          whileTap='hover'
        >
          <h4 className={styles.header}>{possibility}</h4>
          <ul>
            {possibilities[possibility].map((item) => (
              <li key={item}>
                <CheckSvg />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </Section>
);

export default Possibilities;
