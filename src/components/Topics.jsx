import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import quotesData from '../../data/quotesList.json';

const Topics = ({ onDeleteQuote, onUpdateQuote }) => {
  const { topics } = useParams(); // extracting the topic parameter from the URL (/:topic)
  const [quotes, setQuotes] = useState([]); // holds the filtered quotes based on the selected topic
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quoteToUpdate, setQuoteToUpdate] = useState(null); 
  const [quoteText, setQuoteText] = useState(''); 
  const [quoteAuthor, setQuoteAuthor] = useState(''); 
  const [quoteCategory, setQuoteCategory] = useState('');

  
  

  useEffect(() => {
    try {
      // effect hook to update the quotes when the topic changes
      const filteredQuotes = quotesData.topics.filter(
        (quote) => quote.category === topics
      );
      setQuotes(filteredQuotes); // Set the filtered quotes to the state
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  }, [topics]); // Re-run the effect when the topic changes

  const handleDelete = (quoteToDelete) => {
    const updatedQuotes = quotes.filter(quote =>
      !(quote.text === quoteToDelete.text && quote.author === quoteToDelete.author && quote.category === quoteToDelete.category)
    );
    setQuotes(updatedQuotes);
    console.log('Quote deleted:', quoteToDelete);
    onDeleteQuote(quoteToDelete);
  };

  const handleUpdate = () => {
    if (quoteText && quoteAuthor && quoteCategory) {
      const updatedQuote = { ...quoteToUpdate, text: quoteText, author: quoteAuthor, category: quoteCategory };
      onUpdateQuote(updatedQuote);
      clearInputs();
      console.log('Quote updated:', updatedQuote);
    } else {
      alert('Please fill in all fields.');
    }
  };

  const selectQuoteToUpdate = (quote) => {
    setQuoteToUpdate(quote);
    setQuoteText(quote.text);
    setQuoteAuthor(quote.author);
    setQuoteCategory(quote.category);
  };

  const clearInputs = () => {
    setQuoteToUpdate(null);
    setQuoteText('');
    setQuoteAuthor('');
    setQuoteCategory('');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Define a function named handleLoad that takes no parameters
const handleLoad = () => {
  try {
      // Attempt to retrieve data from localStorage under the key 'quotes' and store it in storedQuotes variable
      const storedQuotes = localStorage.getItem('quotes');
      // Check if there is any data stored in storedQuotes
      if (storedQuotes) {
          // Parse the stored data from JSON format into a JavaScript object and store it in parsedQuotes variable
          const parsedQuotes = JSON.parse(storedQuotes);
          // Set the state variable quotes to the parsedQuotes, ensuring it's an array
          setQuotes(parsedQuotes);
      } else {
          // Log an error message to the console if no data is found in localStorage
          console.error('No quotes found in localStorage');
      }
  } catch (error) {
      console.error('Error loading quotes from localStorage:', error);
  }
};


  return (
    <div>
      <h3>List of Quotes - {topics}</h3>
      <button onClick={handleLoad}>Load</button>
      {/* Map over the filtered quotes and display each quote */}
      {quotes.map((quote, index) => (
  <blockquote key={index}>
    <p>
      <strong>Quote:</strong> <q>{quote.quote}</q>
    </p>
    <p>
      <strong>Author:</strong> - {quote.author}
    </p>
    <p>
      <strong>Category:</strong> - {quote.category}
    </p>
    <button onClick={() => handleDelete(quote)}>Del</button>
    <button onClick={() => selectQuoteToUpdate(quote)}>Update</button>
    <br />
  </blockquote>
))}
     
      {quoteToUpdate && (
        <div>
          <h3>Update Quote</h3>
          <input
            type="text"
            value={quoteText}
            onChange={(e) => setQuoteText(e.target.value)}
            placeholder="Enter quote text"
          />
          <input
            type="text"
            value={quoteAuthor}
            onChange={(e) => setQuoteAuthor(e.target.value)}
            placeholder="Enter author"
          />
          <input
            type="text"
            value={quoteCategory}
            onChange={(e) => setQuoteCategory(e.target.value)}
            placeholder="Enter category"
          />
          <button onClick={handleUpdate}>Update Quote</button>
        </div>
      )}
    </div>
  );
};

export default Topics;
