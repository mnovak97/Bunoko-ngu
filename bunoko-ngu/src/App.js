
import './App.css';
import React from 'react';
import './components/Header/Header.js';
import Header from './components/Header/Header.js';
import HomePage from './components/HomePage/HomePage.js';
import Contact from './components/Contact/Contact.js';
import Careers from './components/Careers/Careers.js';
import Services from './components/Services/Services.js';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
    

function App() {
  return (
   <Router>
      <Header/>
      <main>
        
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/careers' element={<Careers/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
      </main>
   </Router>
  );
}

export default App;
