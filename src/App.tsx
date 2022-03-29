import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from 'helpers/theme';
import BackgroundAsset from 'assets/bg-texture.png';
import Header from 'components/Header';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    width: 100%;
    margin: 0;
    scroll-behavior: smooth;
    background: ${theme.colors.background};
    background-image: url(${BackgroundAsset});
    color: ${theme.colors.text};
    font-family: 'EB Garamond', serif;
    font-size: 16px;
  }
  svg {
    flex-shrink: 0;
  }
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.desktop}px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Container>
      <Header />
    </Container>
  </ThemeProvider>
);

export default App;
