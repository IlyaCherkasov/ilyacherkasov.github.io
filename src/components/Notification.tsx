import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled(motion.div)`
  position: fixed;
  top: -3rem;
  left: 50%;
  z-index: 1000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: max-content;
  max-width: calc(80vw - 3rem);
  padding: 0.5rem 1.5rem;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  background: ${({ theme }) => theme.colors.brightLilac};
  border-radius: 2rem;
  transform: translateX(-50%);
  opacity: 0;
  transition: all 1s ease-in-out;
`;

const Notification = () => (
  <Container id="reloadNotification">
    Newer version is available! Please, refresh the page.
  </Container>
);

export default Notification;
