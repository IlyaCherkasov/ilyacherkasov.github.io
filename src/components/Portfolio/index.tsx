import { motion } from 'framer-motion';

import CascanaImg from 'assets/cascana.webp';
import PuncherImg from 'assets/puncher.webp';
import RdgaImg from 'assets/rdga.webp';
import RpsImg from 'assets/rps.webp';
import OutlineButton from 'components/OutlineButton';
import PrimaryButton from 'components/PrimaryButton';
import Section from 'components/Section';

import styles from './styles.module.css';

const portfolio = [
  {
    title: 'PuncherApp: loyalty programs for small business',
    image: PuncherImg,
  },
  {
    title: 'Cascana: Customer Engagement Center',
    demo: 'https://cascana.ru',
    image: CascanaImg,
  },
  {
    title: 'Russian Disc-Golf Association',
    github: 'https://github.com/RDGAapp',
    demo: 'https://rdga.ru',
    image: RdgaImg,
  },
  {
    title: 'Rock-Paper-Scissors Game vs Computer',
    github: 'https://github.com/IlyaCherkasov/RockPaperScissors',
    demo: 'https://ilyacherkasov.github.io/RockPaperScissors/',
    image: RpsImg,
  },
];

const Portfolio = () => (
  <Section id='portfolio' header='Portfolio' subheader='My Recent Work'>
    <div className={styles.container}>
      {portfolio.map((item, index) => (
        <motion.div
          key={item.title}
          className={styles.tile}
          variants={{
            hidden: { x: index % 2 === 0 ? -100 : 100, opacity: 0 },
            show: { x: 0, opacity: 1, transition: { duration: 1 } },
            hover: { scale: 1.05 },
          }}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          whileHover='hover'
          whileTap='hover'
        >
          <div
            className={styles.image}
            style={{ '--image': `url('${item.image}')` } as React.CSSProperties}
          />
          <h4>{item.title}</h4>
          <div className={styles.buttons}>
            {item.github && (
              <OutlineButton name='GitHub' link={item.github} target='_blank' />
            )}
            {item.demo && (
              <PrimaryButton
                name='Live Demo'
                link={item.demo}
                target='_blank'
              />
            )}
            {!item.demo && !item.github && (
              <h5>Application is not accessible :(</h5>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);

export default Portfolio;
