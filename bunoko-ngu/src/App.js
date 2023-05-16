
import './App.css';
import './components/Header/Header.js';
import Header from './components/Header/Header.js';
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

function App() {
  return (
   <Router>
      <Header/>
      <Routes>
        <Route path='/contact' element={<Contact/>} />
      </Routes>
   </Router>
  );
}

export default App;
