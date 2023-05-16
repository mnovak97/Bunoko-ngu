
import './App.css';
import React, { useEffect } from 'react';
import './components/Header/Header.js';
import Header from './components/Header/Header.js';
import HomePage from './components/HomePage/HomePage';
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
    

function App() {
  useEffect(() => {
    document.title = 'Bunoko';
  }, []);
  return (
   <Router>
      <Header/>
      <main>
        
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      </main>
   </Router>
  );
}

export default App;
