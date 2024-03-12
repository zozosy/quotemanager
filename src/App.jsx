import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import QuotesHomepage from './components/QuotesHomepage';
import Footer from './components/Footer';
import QuoteForm from './components/QuoteForm';
import './App.css'; 
import Topics from './components/Topics';

const App = () => {
  const [quotes, setQuotes] = useState([]); 

  const addNewQuote = (newQuote) => {
    setQuotes([...quotes, newQuote]);
    console.log('Quote added:', newQuote);
  };

  const onDeleteQuote = (quoteToDelete) => {
    console.log('Deleting quote:' , quoteToDelete);
  };

  const onUpdateQuote =(quoteToUpdate) => {
    console.log('Updated Quote:', quoteToUpdate)
  };
  
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

        <Routes>
          <Route path="/home" element={<QuotesHomepage/>} />
          <Route path="/quote-form" element={<QuoteForm 
                                                  addNewQuote={addNewQuote} 
                                                />} />
          <Route path="/about" element={<About />} />
          <Route  path="/topics/:topics" 
                  element={<Topics onDeleteQuote={onDeleteQuote} onUpdateQuote={onUpdateQuote} />} 
/>

        </Routes>
     {/* <Footer/> */}
      </div>
    </Router>
  );
}
export default App
