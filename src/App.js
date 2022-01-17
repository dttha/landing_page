import './App.css';
import React from 'react';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Environment from './components/Environment';
import Product from './components/Product';
import News from './components/News';
import Partner from './components/Partner';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <div>
        <Header />
        <Home />
        <About />
        <Product />
        <Environment />
        <News />
        <Partner />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
