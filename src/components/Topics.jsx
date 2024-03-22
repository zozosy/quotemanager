import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setQuotes } from '../reducers/testReducer';

const Topics = () => {
  const quotesData = useSelector(state => state.test.quotesData);
  const dispatch = useDispatch();
  const { topics } = useParams(); // extracting the topic parameter from the URL (/:topic)
  const [quotes, filterQuotes] = useState([]); // holds the filtered quotes based on the selected topic
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quoteToUpdate, setQuoteToUpdate] = useState(null); 
  const [formData, setFormData] = useState({
    quoteText: '',
    quoteAuthor: '',
    quoteCategory: ''
  });

  useEffect(() => {
    try {
      const filteredQuotes = quotesData.filter(
        (quote) => quote.category === topics
      );
      filterQuotes(filteredQuotes);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  }, [topics]);

  const handleDelete = (quoteToDelete) => {
    const updatedQuotes = quotes.filter(quote =>
      !(quote.quote === quoteToDelete.quote && quote.author === quoteToDelete.author && quote.category === quoteToDelete.category)
    );
    filterQuotes(updatedQuotes);
    dispatch(setQuotes({ quotesData: updatedQuotes }));
    console.log('Quote deleted:', quoteToDelete);
  };

  const handleUpdate = (index, quote, author, category) => {
    const updatedQuotes = [...quotes]; // Create a copy of quotes array
    updatedQuotes[index] = { quote, author, category }; // Update the quote at the specified index
    filterQuotes(updatedQuotes);
    // Dispatch action to update state in store here if necessary
    console.log('Quote updated:', updatedQuotes[index]);
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

  const handleLoad = () => {
    try {
      const storedQuotes = localStorage.getItem('quotes');
      if (storedQuotes) {
        const parsedQuotes = JSON.parse(storedQuotes);
        filterQuotes(parsedQuotes);
      } else {
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

<button onClick={() => handleUpdate(quotes.findIndex(quote => quote === quoteToUpdate), formData.quoteText, formData.quoteAuthor, formData.quoteCategory)}>Update Quote</button>
        </div>
      )}
    </div>
  );
};

export default Topics;
