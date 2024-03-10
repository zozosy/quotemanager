import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

/**
 * Importing other components
 */
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
//import NavigationBar from './components/NavigationBar';
import QuotesHomepage from './components/QuotesHomepage';
import Footer from './components/Footer';
import QuoteForm from './components/QuoteForm';
import './App.css'; // Import the CSS file
import Topics from './components/Topics';








const App = () => {
  return (
    <Router>
      <div>
        <Header/>
        {/* <NavigationBar/>
        <QuotesHomepage/>
        <Footer/>

        <QuoteForm/> */}


      
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

      
        <Routes>
          <Route path="/home" element={<QuotesHomepage/>} />
          <Route path="/quote-form" element={<QuoteForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/topics/:topics" element={<Topics />} />

          
        </Routes>
     {/* <Footer/> */}

      </div>
    </Router>
    
  );

}

export default App
