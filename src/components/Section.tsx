import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledSection = styled.section`
  width: calc(100% - 2rem);
  padding: 5rem 1rem 0;
`;

const Header = styled(motion.h2)`
  margin: 0 0 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.7rem;
`;
interface Props {
  id: string;
  header: string;
  subheader: string;
  children: JSX.Element;
}

const Section = ({
  id, header, subheader, children,
}: Props) => (
  <StyledSection id={id}>
    <motion.h5
      variants={{
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ default: { duration: 1 } }}
    >
      {subheader}
    </motion.h5>
    <Header
      variants={{
        hidden: { y: 100, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ default: { duration: 1 } }}
    >
      {header}
    </Header>
    {children}
  </StyledSection>
);

export default Section;
