import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from 'components/Section';
import PuncherImg from 'assets/puncher.jpeg';
import RdgaImg from 'assets/rdga.jpeg';
import RpsImg from 'assets/rps.jpeg';
import DemotivatorImg from 'assets/generator.jpeg';
import OutlineButton from 'components/OutlineButton';
import PrimaryButton from 'components/PrimaryButton';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 2rem;
`;

const Tile = styled(motion.div)`
  display: flex;
  flex: 1;
  flex-basis: 40%;
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
  background-size: 100%;
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
    github: '',
    demo: 'https://puncher.app',
    image: PuncherImg,
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
  {
    title: 'Demotivator generator (JavaScript only)',
    github: 'https://github.com/IlyaCherkasov/Generator',
    demo: 'https://ilyacherkasov.github.io/Generator/',
    image: DemotivatorImg,
  },
];

const Portfolio = () => (
  <Section id="portfolio" header="Portfolio" subheader="My Recent Work">
    <Container>
      {portfolio.map((item, index) => (
        <Tile
          key={item.title}
          variants={{
            hidden: { x: index % 2 === 0 ? -100 : 100, opacity: 0 },
            show: { x: 0, opacity: 1, transition: { duration: 1 } },
            hover: { scale: 1.05 },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          whileHover="hover"
          whileTap="hover"
        >
          <Image img={item.image} />
          <h4>
            {item.title}
          </h4>
          <Buttons>
            {item.github && <OutlineButton name="GitHub" link={item.github} target="_blank" />}
            <PrimaryButton name="Live Demo" link={item.demo} target="_blank" />
          </Buttons>
        </Tile>
      ))}
    </Container>
  </Section>
);

export default Portfolio;
