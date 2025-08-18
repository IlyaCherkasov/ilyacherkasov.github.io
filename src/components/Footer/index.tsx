import { motion } from 'framer-motion';

import navigation from 'helpers/navigation';
import socialLinks from 'helpers/socialLinks';

import styles from './styles.module.css';

const extendedNavigation = [
  navigation[0],
  navigation[1],
  navigation[2],
  {
    name: 'companies',
    title: 'Companies',
  },
  navigation[3],
  {
    name: 'portfolio',
    title: 'Portfolio',
  },
  navigation[4],
];

const Footer = () => (
  <div className={styles.container}>
    <h2>CHERKASIK</h2>
    <nav className={styles.nav}>
      {extendedNavigation.map((item) => (
        <motion.a
          href={`#${item.name}`}
          key={item.name}
          variants={{ hover: { scale: 1.5 } }}
          whileHover='hover'
          whileTap='hover'
        >
          {item.title}
        </motion.a>
      ))}
    </nav>
    <div className={styles.socialLinks}>
      {socialLinks.map((link) => (
        <motion.a
          key={link.label}
          href={link.url}
          title={link.label}
          target='_blank'
          rel='noreferrer'
          variants={{ hover: { scale: 1.5 } }}
          whileHover='hover'
          whileTap='hover'
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
    ©Ilya Cherkasov
  </div>
);

export default Footer;
