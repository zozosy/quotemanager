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
import NavigationBar from './components/NavigationBar';
import QuotesHomepage from './components/QuotesHomepage';
import Footer from './components/Footer';




const App = () => {
  return (
    <Router>
      <div>
        <Header/>
        <NavigationBar/>
        <QuotesHomepage/>
        <Footer/>

      
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL.
            Furthermore, notice how the content above always renders? On each page? */}
        <Routes>
          <Route path="/home" element={<QuotesHomepage/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
