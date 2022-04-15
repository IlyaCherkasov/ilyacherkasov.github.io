import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.purple}90;
  border: 1px solid ${({ theme }) => theme.colors.purple}90;
  border-radius: 1rem;
  transition: background-color 0.3s ease-in-out;

  svg {
    fill: ${({ theme }) => theme.colors.brightLilac};
  }
`;

const Name = styled.h3`
  margin-top: 1rem;
`;

const Description = styled.h5`
  color: ${({ theme }) => theme.colors.white}80;
  font-weight: normal;
`;

interface Props {
  name: string,
  description: string,
  children: JSX.Element,
}

const Tile = ({ name, description, children }: Props) => (
  <Container
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 1.1 }}
  >
    {children}
    <Name>
      {name}
    </Name>
    <Description>
      {description}
    </Description>
  </Container>
);

export default Tile;
