import { motion } from 'framer-motion';

import styles from './styles.module.css';

interface Props {
  name: string;
  description: string;
  children: React.ReactNode;
}

const Tile = ({ name, description, children }: Props) => (
  <motion.div
    className={styles.container}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 1.1 }}
  >
    {children}
    <h3 className={styles.name}>{name}</h3>
    <h5 className={styles.description}>{description}</h5>
  </motion.div>
);

export default Tile;
