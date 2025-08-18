import { useEffect, useState } from 'react';

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

import styles from './styles.module.css';

import './styles.module.css';

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
    <>
      <div className={styles.container}>
        <Header />
        <Navigation activeSection={activeSection} />
        <About />
        <Experience />
        <Companies />
        <Possibilities />
        <Portfolio />
        <Contact />
      </div>
      <Notification />
      <Footer />
    </>
  );
};

export default App;
