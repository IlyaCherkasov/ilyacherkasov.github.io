import styled from 'styled-components';
import Section from 'components/Section';
import { ReactComponent as HqoSvg } from 'assets/hqo.svg';
import { ReactComponent as ItransitionSvg } from 'assets/itransition.svg';
import { ReactComponent as KandaSvg } from 'assets/kanda.svg';
import { ReactComponent as PuncherSvg } from 'assets/puncher.svg';

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

const Companies = () => (
  <Section id="experience" header="Companies" subheader="Where I Worked">
    <Container>
      <a href="https://puncher.app" target="_blank" rel="noreferrer">
        <PuncherSvg />
      </a>
      <a href="https://itransition.com" target="_blank" rel="noreferrer">
        <ItransitionSvg />
      </a>
      <a href="https://kandasoft.com" target="_blank" rel="noreferrer">
        <KandaSvg />
      </a>
      <a href="https://hqo.com" target="_blank" rel="noreferrer">
        <HqoSvg />
      </a>
    </Container>
  </Section>
);

export default Companies;
