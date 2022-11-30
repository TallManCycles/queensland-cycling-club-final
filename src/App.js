import { useState } from 'react';
import './App.css';

//Components
import Navbar from './components/Root/Navbar';
import Footer from './components/Root/Footer';
import Header from './components/Root/Header';
import Gallery from './components/Main/Gallery';
import Upcomingraces from './components/Main/Upcomingraces';
import Grouprides from './components/Main/Grouprides';
import Modal from './components/Global/Modal';
import About from './components/Aside/About';
import Leaderboard from './components/Aside/Leaderboard';
import Roadclosures from './components/Aside/Roadclosures';
import Safetyvideo from './components/Aside/Safetyvideo';
import Weather from './components/Main/Weather';

function App() { 

  return (
    <div className="App">
      <Navbar />
      <Header />
      <section className='flexContent'>
        <main>
          <Gallery />
          <Upcomingraces />
          <Grouprides />
          <Weather />
          <Modal />
        </main>  
        <aside>
          <About />
          <Leaderboard />
          <Roadclosures />
          <Safetyvideo />
        </aside>
      </section>
      <Footer />
    </div>
  );
}

export default App;