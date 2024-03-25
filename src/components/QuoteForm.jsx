import React, { useState, useEffect } from 'react'; // Importing necessary modules from React
import { useDispatch, useSelector } from 'react-redux'; // Importing useDispatch and useSelector hooks from react-redux
import { setQuotes } from '../reducers/testReducer'; // Importing setQuotes action creator from testReducer

const QuoteForm = () => {
  const quotes = useSelector(state => state.test.quotesData); // Accessing quotes data from Redux store
  const dispatch = useDispatch(); // Initializing dispatch function from react-redux
  const [quoteText, setQuoteText] = useState(''); // Initializing state for quote text
  const [quoteAuthor, setQuoteAuthor] = useState(''); // Initializing state for quote author
  const [quoteCategory, setQuoteCategory] = useState(''); // Initializing state for quote category

  // Function to add a new quote to Redux store
  const addNewQuote = (newQuote) => {
    const updateQuotes = [...quotes, newQuote]; // Updating quotes array with new quote
    dispatch(setQuotes({ quotesData: updateQuotes })); // Dispatching action to update quotes in Redux store
    console.log('Quote added:', newQuote); // Logging the added quote
    console.log('All Quotes:', quotes); // Logging all quotes after addition
  };

  // Function to handle addition of a new quote
  const handleAddQuote = () => {
    if (quoteText && quoteAuthor && quoteCategory) { // Checking if all fields are filled
      const newQuoteData = { quote: quoteText, author: quoteAuthor, category: quoteCategory }; // Creating new quote object
      addNewQuote(newQuoteData); // Calling function to add new quote
      clearInputs(); // Clearing input fields after adding quote
    } else {
      alert('Please fill in all fields.'); // Alerting if any field is empty
    }
  };

  // Function to clear input fields
  const clearInputs = () => {
    setQuoteText(''); // Clearing quote text
    setQuoteAuthor(''); // Clearing quote author
    setQuoteCategory(''); // Clearing quote category
  };

  return (
    <div className="quote-form"> {/* Quote form container */}
      <h2>Quote Form</h2> {/* Heading */}
      <input
        type="text"
        value={quoteText}
        placeholder="Enter quote"
        onChange={(e) => setQuoteText(e.target.value)} // Handling change in quote text input
      />
      <input
        type="text"
        value={quoteAuthor}
        placeholder="Enter author"
        onChange={(e) => setQuoteAuthor(e.target.value)} // Handling change in quote author input
      />
      <input
        type="text"
        value={quoteCategory}
        placeholder="Enter category"
        onChange={(e) => setQuoteCategory(e.target.value)} // Handling change in quote category input
      />
      <button onClick={handleAddQuote}>Add Quote</button> {/* Button to add new quote */}
    </div>
  );
};

export default QuoteForm; // Exporting QuoteForm component
