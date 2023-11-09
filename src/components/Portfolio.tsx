import { motion } from 'framer-motion';
import styled from 'styled-components';

import CascanaImg from 'assets/cascana.webp';
import PuncherImg from 'assets/puncher.webp';
import RdgaImg from 'assets/rdga.webp';
import RpsImg from 'assets/rps.webp';
import OutlineButton from 'components/OutlineButton';
import PrimaryButton from 'components/PrimaryButton';
import Section from 'components/Section';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr;
  }
`;

const Tile = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  height: min-content;
  padding: 1.5rem;
  text-align: left;
  background-color: ${({ theme }) => theme.colors.purple}90;
  border: 1px solid ${({ theme }) => theme.colors.purple}90;
  border-radius: 2rem;

  h4 {
    width: 100%;
    font-size: 1.1rem;
  }
`;

const Image = styled.div<{ img: string }>`
  width: 100%;
  aspect-ratio: 1 / 0.7;
  overflow: hidden;
  background: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 2rem;
`;

const Buttons = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  justify-content: flex-start;
  width: 100%;
`;

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
    <Container>
      {portfolio.map((item, index) => (
        <Tile
          key={item.title}
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
          <Image img={item.image} />
          <h4>{item.title}</h4>
          <Buttons>
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
          </Buttons>
        </Tile>
      ))}
    </Container>
  </Section>
);

export default Portfolio;
