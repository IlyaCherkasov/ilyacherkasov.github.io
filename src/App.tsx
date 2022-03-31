import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from 'helpers/theme';
import BackgroundAsset from 'assets/bg-texture.png';
import Header from 'components/Header';

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    margin: 0;
    scroll-behavior: smooth;
    color: ${theme.colors.text};
    font-size: 16px;
    font-family: "EB Garamond", serif;
    background: ${theme.colors.background};
    background-image: url(${BackgroundAsset});
  }

  svg {
    flex-shrink: 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${({ theme }) => theme.breakpoints.desktop}px;
  margin: auto;
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
