import { motion } from 'framer-motion';
import styled from 'styled-components';

import { ReactComponent as CascanaSvg } from 'assets/cascana.svg';
import { ReactComponent as HqoSvg } from 'assets/hqo.svg';
import { ReactComponent as ItransitionSvg } from 'assets/itransition.svg';
import { ReactComponent as KandaSvg } from 'assets/kanda.svg';
import { ReactComponent as PuncherSvg } from 'assets/puncher.svg';
import { ReactComponent as ShtormSvg } from 'assets/shtorm.svg';
import Section from 'components/Section';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-flow: row wrap;
  gap: 1rem 5rem;
  justify-content: center;
  height: min-content;

  svg {
    width: 10rem;
    height: 5rem;
  }
`;

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
    <Container>
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
    </Container>
  </Section>
);

export default Companies;
