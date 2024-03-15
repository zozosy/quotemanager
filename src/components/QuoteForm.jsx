import React, { useState, useEffect } from 'react'; // Importing React and useState hook from React library

const QuoteForm = ({ addNewQuote }) => { // Defining a functional component named QuoteForm, receiving addNewQuote as prop
  const [quoteText, setQuoteText] = useState(''); // Declaring state variable quoteText and setter function setQuoteText using useState hook, initializing with an empty string
  const [quoteAuthor, setQuoteAuthor] = useState(''); // Declaring state variable quoteAuthor and setter function setQuoteAuthor using useState hook, initializing with an empty string
  const [quoteCategory, setQuoteCategory] = useState(''); // Declaring state variable quoteCategory and setter function setQuoteCategory using useState hook, initializing with an empty string

 
  

  // Function to add a new quote
const handleAddQuote = () => {
  if (quoteText && quoteAuthor && quoteCategory) {
    const newQuoteData = { quote: quoteText, author: quoteAuthor, category: quoteCategory };
    addNewQuote(newQuoteData);
    clearInputs();
    console.log('Quote added:', newQuoteData);
  } else {
    alert('Please fill in all fields.');
  }
};

  

  const clearInputs = () => { // Defining a function to clear input fields
    setQuoteText(''); // Clearing quoteText
    setQuoteAuthor(''); // Clearing quoteAuthor
    setQuoteCategory(''); // Clearing quoteCategory
  };

  

  return (
    <div className="quote-form"> 
      <h2>Quote Form</h2> 
      <input // Input field for quote
        type="text"
        value={quoteText}
        placeholder="Enter quote"
        onChange={(e) => setQuoteText(e.target.value)}
      />
      <input // Input field for author
        type="text"
        value={quoteAuthor}
        placeholder="Enter author"
        onChange={(e) => setQuoteAuthor(e.target.value)}
      />
      <input // Input field for category
        type="text"
        value={quoteCategory}
        placeholder="Enter category"
        onChange={(e) => setQuoteCategory(e.target.value)}
      />
      <button onClick={handleAddQuote}>Add Quote</button> 
    </div>
  );
};

export default QuoteForm; // Exporting QuoteForm component
