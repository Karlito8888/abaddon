import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import About from './components/About/About';
import Media from './components/Media/Media';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import './styles/global.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Media />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
