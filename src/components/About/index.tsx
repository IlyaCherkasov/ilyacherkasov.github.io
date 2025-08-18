import { motion } from 'framer-motion';

import Img from 'assets/about.webp';
import { ReactComponent as MedalSvg } from 'assets/medal.svg';
import { ReactComponent as ProjectsSvg } from 'assets/projects.svg';
import { ReactComponent as UserSvg } from 'assets/users.svg';
import PrimaryButton from 'components/PrimaryButton';
import Section from 'components/Section';
import Tile from 'components/Tile';
import useWorkYears from 'helpers/useWorkYears';

import styles from './styles.module.css';

const About = () => {
  const workYears = useWorkYears();

  return (
    <Section id='about' header='About Me' subheader='Get To Know'>
      <div className={styles.container}>
        <motion.div
          className={styles.imageContainer}
          variants={{
            hidden: { x: -100, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={Img}
            alt=''
            variants={{
              normal: { rotate: 0 },
              tilted: { rotate: 10, transition: { duration: 1, delay: 1 } },
            }}
            initial='normal'
            whileInView='tilted'
            viewport={{ once: true }}
            whileHover='normal'
            whileTap='normal'
          />
        </motion.div>
        <motion.div
          className={styles.contentContainer}
          variants={{
            hidden: { x: 100, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className={styles.tiles}>
            <Tile name='Experience' description={`${workYears}+ Years Working`}>
              <MedalSvg />
            </Tile>
            <Tile name='Team' description='3-20 people'>
              <UserSvg />
            </Tile>
            <Tile name='Projects' description='3 Commercial'>
              <ProjectsSvg />
            </Tile>
          </div>
          I&apos;m a graduate of ITMO University. My bachelor degree was in
          sphere of Information Technologies and Programming at department of
          Information Systems. Started my career in university with small
          startup where I developed myself as a professional and a good
          teammate. In my spare time love to throw some discs because my hobby
          is disc-golf and programming of course. Also my hobbies are
          intertwined into development site for Russian Disc-Golf Association to
          evolve disc-golf into something more than hobby for all professional
          players.
          <PrimaryButton
            name="Let's talk"
            link='#contact'
            variants={{
              hidden: { y: 100, opacity: 0 },
              show: { y: 0, opacity: 1, transition: { duration: 1 } },
              hover: { scale: 1.2 },
            }}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            whileHover='hover'
            whileTap='hover'
          />
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
