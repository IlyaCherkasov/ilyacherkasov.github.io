import { useEffect, useState } from 'react';

import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import BackgroundAsset from 'assets/bg-texture.webp';
import About from 'components/About';
import Companies from 'components/Companies';
import Contact from 'components/Contact';
import Experience from 'components/Experience';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import Notification from 'components/Notification';
import Portfolio from 'components/Portfolio';
import Possibilities from 'components/Possibilities';
import theme from 'helpers/theme';

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    width: 100%;
    margin: 0;
    scroll-behavior: smooth;
    color: ${theme.colors.text};
    font-size: 20px;
    font-family: "EB Garamond", serif;
    line-height: 1.7;
    background: ${theme.colors.background};
    background-image: url(${BackgroundAsset});
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    margin: 0;
  }

  svg {
    flex-shrink: 0;
    width: 1rem;
    aspect-ratio: 1;
    fill: currentColor;
  }

  img {
    display: block;
    width: 100%;
    object-fit: cover;
  }

  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s ease-in-out;

    :hover,
    :focus {
      color: ${theme.colors.gold};
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${({ theme }) => theme.breakpoints.desktop}px;
  margin: auto;
  padding-bottom: 10rem;
  text-align: center;
`;

const App = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    let newActiveSection = '';
    sections.forEach((section) => {
      if (window.scrollY + 50 >= section.offsetTop) {
        newActiveSection = section.getAttribute('id') || '';
      }
    });
    setActiveSection(newActiveSection);
  };

  useEffect(() => {
    window.onscroll = handleScroll;
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header />
        <Navigation activeSection={activeSection} />
        <About />
        <Experience />
        <Companies />
        <Possibilities />
        <Portfolio />
        <Contact />
      </Container>
      <Notification />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
