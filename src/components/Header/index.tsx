import { motion } from 'framer-motion';

import MeImg from 'assets/main.webp';
import { MOutlineButton } from 'components/OutlineButton';
import PrimaryButton from 'components/PrimaryButton';
import socialLinks from 'helpers/socialLinks';
import useCv from 'helpers/useCv';

import styles from './styles.module.css';

const Header = () => (
  <div className={styles.container}>
    <motion.h5
      className={styles.greetings}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      Hello, I&apos;m
    </motion.h5>
    <motion.h1
      className={styles.name}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ default: { duration: 1 } }}
    >
      Ilya Cherkasov
    </motion.h1>
    <motion.h5
      className={styles.position}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, default: { duration: 1 } }}
    >
      TypeScript Developer
    </motion.h5>
    <div className={styles.ctaButtons}>
      <MOutlineButton
        name='Download CV'
        link={useCv()}
        downloadFileName='Ilya Cherkasov CV'
        variants={{
          hidden: { x: -100, opacity: 0 },
          show: { x: 0, opacity: 1, transition: { delay: 1.2, duration: 1 } },
          hover: { scale: 1.2 },
        }}
        initial='hidden'
        animate='show'
        whileHover='hover'
        whileTap='hover'
      />
      <PrimaryButton
        name="Let's talk"
        link='#contact'
        variants={{
          hidden: { x: 100, opacity: 0 },
          show: { x: 0, opacity: 1, transition: { delay: 1.2, duration: 1 } },
          hover: { scale: 1.2 },
        }}
        initial='hidden'
        animate='show'
        whileHover='hover'
        whileTap='hover'
      />
    </div>
    <motion.div
      className={styles.me}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <img src={MeImg} alt='me' />
    </motion.div>
    <motion.div
      className={styles.socials}
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {socialLinks.map((social) => (
        <motion.a
          href={social.url}
          target='_blank'
          rel='noreferrer'
          key={social.label}
          variants={{ hover: { scale: 1.5 } }}
          whileHover='hover'
          whileTap='hover'
        >
          {social.icon}
        </motion.a>
      ))}
    </motion.div>
    <motion.a
      href='#contact'
      className={styles.scrollDown}
      variants={{
        hidden: { x: 80, opacity: 0, rotate: '90deg' },
        appear: {
          x: 30,
          opacity: 1,
          rotate: '90deg',
          transition: { duration: 1 },
        },
        hover: { scale: 1.5 },
      }}
      initial='hidden'
      animate='appear'
      whileHover='hover'
      whileTap='hover'
    >
      Scroll Down
    </motion.a>
  </div>
);

export default Header;
