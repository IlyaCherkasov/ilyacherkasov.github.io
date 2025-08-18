import { motion } from 'framer-motion';

import styles from './styles.module.css';

const Notification = () => (
  <motion.div id='reloadNotification' className={styles.container}>
    Newer version is available! Please, refresh the page.
  </motion.div>
);

export default Notification;
