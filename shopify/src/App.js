import React from 'react';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Aboutus from './components/Aboutus.js';
import Team from './components/Team.js';
import Services from './components/Services.js';
import Contact from './components/Contact.js';

import './App.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Aboutus />
      <Team />
      <Services />
      <Contact />
  </div>
  );
}

export default App;
