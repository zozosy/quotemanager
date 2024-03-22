import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuotes } from '../reducers/testReducer';

const QuoteForm = () => {
  const quotes = useSelector(state => state.test.quotesData);
  const dispatch = useDispatch();
  const [quoteText, setQuoteText] = useState('');
  const [quoteAuthor, setQuoteAuthor] = useState('');
  const [quoteCategory, setQuoteCategory] = useState('');

 
  const addNewQuote = (newQuote) => {
    const updateQuotes = [...quotes, newQuote];
    dispatch(setQuotes({ quotesData: updateQuotes }));
    console.log('Quote added:', newQuote);
    console.log('All Quotes:', quotes);
  };

  // Function to add a new quote
const handleAddQuote = () => {
  if (quoteText && quoteAuthor && quoteCategory) {
    const newQuoteData = { quote: quoteText, author: quoteAuthor, category: quoteCategory };
    addNewQuote(newQuoteData);
    clearInputs();
  } else {
    alert('Please fill in all fields.');
  }
};

  const clearInputs = () => {
    setQuoteText('');
    setQuoteAuthor('');
    setQuoteCategory('');
  };

  

  return (
    <div className="quote-form"> 
      <h2>Quote Form</h2> 
      <input
        type="text"
        value={quoteText}
        placeholder="Enter quote"
        onChange={(e) => setQuoteText(e.target.value)}
      />
      <input
        type="text"
        value={quoteAuthor}
        placeholder="Enter author"
        onChange={(e) => setQuoteAuthor(e.target.value)}
      />
      <input
        type="text"
        value={quoteCategory}
        placeholder="Enter category"
        onChange={(e) => setQuoteCategory(e.target.value)}
      />
      <button onClick={handleAddQuote}>Add Quote</button> 
    </div>
  );
};

export default QuoteForm;
