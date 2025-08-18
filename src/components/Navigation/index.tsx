import { motion } from 'framer-motion';

import navigation from 'helpers/navigation';

import styles from './styles.module.css';

interface Props {
  activeSection: string;
}

const Navigation = ({ activeSection }: Props) => {
  const difference = window.innerWidth > 768 ? 62 : 52;
  const positions: Record<string, number> = {
    home: 0,
    about: difference,
    experience: difference * 2,
    companies: difference * 2,
    possibilities: difference * 3,
    portfolio: difference * 3,
    contact: difference * 4,
  };

  return (
    <motion.nav
      className={styles.navBar}
      initial={{ y: 100, opacity: 0, x: '-50%' }}
      animate={{
        y: 0,
        opacity: 1,
        x: '-50%',
        transition: { delay: 0.5, duration: 1 },
      }}
    >
      <motion.div
        className={styles.bubble}
        initial={{ x: 0 }}
        animate={{ x: positions[activeSection] }}
      />
      {navigation.map((item) => (
        <a
          className={styles.navItem}
          href={`#${item.name}`}
          title={item.title}
          key={item.title}
        >
          {item.icon}
        </a>
      ))}
    </motion.nav>
  );
};

export default Navigation;
