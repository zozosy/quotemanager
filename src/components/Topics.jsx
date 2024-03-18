import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import quotesData from '../../data/quotesList.json';
import { setQuotes, deleteQuote, updateQuote, setQuoteToUpdate, setFormData } from '../actions/actionstopic'
const Topics = ({quotes , quoteToUpdate , formData , setQuotes, deleteQuote, updateQuote, setQuoteToUpdate, setFormData}) => {
  const { topics } = useParams(); // extracting the topic parameter from the URL (/:topic)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    try {
      setQuotes(quotesData.topics.filter(quote => quote.category === topics));
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  }, [topics, setQuotes]);

  const handleDelete = (quoteToDelete) => {
    deleteQuote(quoteToDelete);
  };

  const handleUpdate = () => {
    if (formData.quoteText && formData.quoteAuthor && formData.quoteCategory) {
      const updatedQuote = { ...quoteToUpdate, quote: formData.quoteText, author: formData.quoteAuthor, category: formData.quoteCategory };
      updateQuote(updatedQuote);
      clearInputs();
      console.log('Quote updated:', updatedQuote);
    } else {
      alert('Please fill in all fields.');
    }
  };

  const selectQuoteToUpdate = (quote) => {
    setQuoteToUpdate(quote);
    setFormData({
      quoteText: quote.quote,
      quoteAuthor: quote.author,
      quoteCategory: quote.category
    });
  };

  const clearInputs = () => {
    setQuoteToUpdate(null);
    setFormData({
      quoteText: '',
      quoteAuthor: '',
      quoteCategory: ''
    });
  };

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

  const handleSaveToLocal = () => {
    localStorage.setItem('quotes', JSON.stringify(quotes));
    console.log('Quotes saved to local storage');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h3>List of Quotes - {topics}</h3>
      <button onClick={handleLoad}>Load</button>
      <button onClick={handleSaveToLocal}>Save to Local Storage</button>

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
  value={formData.quoteText}
  onChange={(e) => setFormData({...formData, quoteText: e.target.value})}
  placeholder="Enter quote text"
/>

<input
  type="text"
  value={formData.quoteAuthor}
  onChange={(e) => setFormData({...formData, quoteAuthor: e.target.value})}
  placeholder="Enter author"
/>

<input
  type="text"
  value={formData.quoteCategory}
  onChange={(e) => setFormData({...formData, quoteCategory: e.target.value})}
  placeholder="Enter category"
/>
          <button onClick={handleUpdate}>Update Quote</button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  quotes: state.quotes, 
  quoteToUpdate: state.quoteToUpdate,
  formData: state.formData
});


export default connect(mapStateToProps, { setQuotes, deleteQuote, updateQuote, setQuoteToUpdate, setFormData })(Topics);