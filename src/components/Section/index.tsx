import { ReactNode } from 'react';

import { motion } from 'framer-motion';

import styles from './styles.module.css';

interface Props {
  id: string;
  header: string;
  subheader: string;
  children: ReactNode;
}

const Section = ({ id, header, subheader, children }: Props) => (
  <section id={id} className={styles.section}>
    <motion.h5
      variants={{
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ default: { duration: 1 } }}
    >
      {subheader}
    </motion.h5>
    <motion.h2
      className={styles.header}
      variants={{
        hidden: { y: 100, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ default: { duration: 1 } }}
    >
      {header}
    </motion.h2>
    {children}
  </section>
);

export default Section;
