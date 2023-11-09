import styled from 'styled-components';

import { ReactComponent as CheckSvg } from 'assets/check.svg';

const Container = styled.div`
  display: flex;
  flex-basis: 40%;
  flex-direction: row;
  gap: 1rem;
  align-items: flex-start;

  svg {
    margin-top: 0.4rem;
    fill: ${({ theme }) => theme.colors.brightLilac};
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h5 {
    opacity: 0.6;
  }
`;

interface Props {
  name: string;
  level: string;
}

const SkillItem = ({ name, level }: Props) => (
  <Container>
    <CheckSvg />
    <TextContainer>
      <h4>
        {name}
      </h4>
      <h5>
        {level}
      </h5>
    </TextContainer>
  </Container>
);

export default SkillItem;
