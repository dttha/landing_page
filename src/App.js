import './App.css';
import React from 'react';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Interest from './components/Interest';
import Skill from './components/Skill';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <div>
        <Header />
        <Home />
        <About />
        <Skill />
        <Interest />
        <Project />
        <Contact />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
