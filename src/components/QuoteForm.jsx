import React, { useState } from 'react';

const QuoteForm = ({ addNewQuote}) => {
  const [quoteText, setQuoteText] = useState('');
  const [quoteAuthor, setQuoteAuthor] = useState('');
  const [quoteCategory, setQuoteCategory] = useState('');

  const handleAddQuote = () => {
    if (quoteText && quoteAuthor && quoteCategory) {
      addNewQuote({ text: quoteText, author: quoteAuthor, category: quoteCategory });
      clearInputs();
      console.log('Quote added:', { text: quoteText, author: quoteAuthor, category: quoteCategory });
    } else {
      alert('Please fill in all fields.');
    
  };
  }

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
