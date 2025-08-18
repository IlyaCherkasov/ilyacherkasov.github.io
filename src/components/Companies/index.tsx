import { motion } from 'framer-motion';

import CascanaSvg from 'assets/cascana.svg?react';
import HqoSvg from 'assets/hqo.svg?react';
import ItransitionSvg from 'assets/itransition.svg?react';
import KandaSvg from 'assets/kanda.svg?react';
import PuncherSvg from 'assets/puncher.svg?react';
import ShtormSvg from 'assets/shtorm.svg?react';
import Section from 'components/Section';

import styles from './index.module.css';

const companies = [
  {
    title: 'PuncherApp',
    href: 'https://puncher.app',
    logo: PuncherSvg,
  },
  {
    title: 'Itransition',
    href: 'https://itransition.com',
    logo: ItransitionSvg,
  },
  {
    title: 'Kanda Software',
    href: 'https://kandasoft.com',
    logo: KandaSvg,
  },
  {
    title: 'HqO',
    href: 'https://hqo.com',
    logo: HqoSvg,
  },
  {
    title: 'ShtormTechnologies',
    href: 'https://shtormtech.ru',
    logo: ShtormSvg,
  },
  {
    title: 'Cascana: CEC',
    href: 'https://cascana.ru',
    logo: CascanaSvg,
  },
];

const Companies = () => (
  <Section id='companies' header='Companies' subheader='Where I Worked'>
    <div className={styles.container}>
      {companies.map((company) => (
        <motion.a
          key={company.title}
          title={company.title}
          href={company.href}
          target='_blank'
          rel='noreferrer'
          variants={{
            hidden: { y: 100, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 1 } },
            hovered: { scale: 1.5 },
          }}
          whileHover='hovered'
          whileTap='hovered'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <company.logo />
        </motion.a>
      ))}
    </div>
  </Section>
);

export default Companies;
