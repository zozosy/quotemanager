import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import QuotesHomepage from './components/QuotesHomepage';
import Footer from './components/Footer';
import QuoteForm from './components/QuoteForm';
import './App.css'; 
import Topics from './components/Topics';

const App = () => {
  
  return (
    <Router> 
      <div>
        <Header/> 
        <nav> 
          <ul>
            <li>
              <Link to="/home">Home</Link> 
            </li>
            <li>
              <Link to="/quote-form">Quote Form</Link> 
            </li>
            <li>
              <Link to="/about">About</Link> 
            </li>
          </ul>
        </nav>
        <main>
          <Home/> 
        </main>

        <Routes> {/* Nested routes */}
          <Route path="/home" element={<QuotesHomepage/>} /> {/* Route to the QuotesHomepage component */}
          <Route path="/quote-form" element={<QuoteForm />} /> 
          <Route path="/about" element={<About />} /> 
          <Route  path="/topics/:topics" element={<Topics />} /> {/* Route with parameter to the Topics component */}
        </Routes>
        <Footer/> 
      </div>
    </Router>
  );
}

export default App; 
