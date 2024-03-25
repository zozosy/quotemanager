import React, { useState, useEffect } from 'react'; // Importing React and necessary hooks from 'react' library
import { useParams } from 'react-router-dom'; // Importing useParams hook from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'; // Importing useDispatch and useSelector hooks from 'react-redux' library
import { setQuotes } from '../reducers/testReducer'; // Importing setQuotes action creator from '../reducers/testReducer'

const Topics = () => {
  const quotesData = useSelector(state => state.test.quotesData); // Accessing quotes data from Redux store using useSelector hook
  const dispatch = useDispatch(); // Initializing dispatch function from react-redux
  const { topics } = useParams(); // Extracting the topic parameter from the URL (/:topic) using useParams hook
  const [quotes, filterQuotes] = useState([]); // Holds the filtered quotes based on the selected topic and manages state using useState hook
  const [loading, setLoading] = useState(true); // State to manage loading status using useState hook
  const [error, setError] = useState(null); // State to manage error status using useState hook
  const [quoteToUpdate, setQuoteToUpdate] = useState(null); // State to hold the quote to update using useState hook
  const [formData, setFormData] = useState({ // State to manage form data using useState hook
    quoteText: '',
    quoteAuthor: '',
    quoteCategory: ''
  });

  useEffect(() => { // Effect hook to perform side effects (fetching data, subscriptions, etc.) based on the selected topic
    try {
      const filteredQuotes = quotesData.filter( // Filtering quotes based on the selected topic
        (quote) => quote.category === topics
      );
      filterQuotes(filteredQuotes); // Updating filtered quotes
      setLoading(false); // Setting loading to false after filtering quotes
    } catch (error) {
      setError(error); // Setting error if there's an exception
    }
  }, [topics]); // Dependency array to trigger the effect whenever 'topics' change

  const handleDelete = (quoteToDelete) => { // Function to handle quote deletion
    const updatedQuotes = quotes.filter(quote => // Filtering out the quote to delete
      !(quote.quote === quoteToDelete.quote && quote.author === quoteToDelete.author && quote.category === quoteToDelete.category)
    );
    filterQuotes(updatedQuotes); // Updating quotes after deletion
    dispatch(setQuotes({ quotesData: updatedQuotes })); // Dispatching action to update quotes in Redux store
    console.log('Quote deleted:', quoteToDelete); // Logging the deleted quote
  };

  const handleUpdate = (index, quote, author, category) => { // Function to handle quote update
    const updatedQuotes = [...quotes]; // Create a copy of quotes array
    updatedQuotes[index] = { quote, author, category }; // Update the quote at the specified index
    filterQuotes(updatedQuotes); // Updating quotes after modification
    // Dispatch action to update state in store here if necessary
    console.log('Quote updated:', updatedQuotes[index]); // Logging the updated quote
  };

  const selectQuoteToUpdate = (quote) => { // Function to select a quote for update
    setQuoteToUpdate(quote); // Setting the quote to update
    setFormData({ // Setting form data with the selected quote details
      quoteText: quote.quote,
      quoteAuthor: quote.author,
      quoteCategory: quote.category
    });
  };

  const clearInputs = () => { // Function to clear form inputs and selected quote for update
    setQuoteToUpdate(null); // Clearing quote to update
    setFormData({ // Clearing form data
      quoteText: '',
      quoteAuthor: '',
      quoteCategory: ''
    });
  };

  const handleLoad = () => { // Function to load quotes from local storage
    try {
      const storedQuotes = localStorage.getItem('quotes'); // Retrieving quotes from local storage
      if (storedQuotes) {
        const parsedQuotes = JSON.parse(storedQuotes);
        filterQuotes(parsedQuotes); // Updating quotes state with loaded quotes
      } else {
        console.error('No quotes found in localStorage'); // Logging error if no quotes found in local storage
      }
    } catch (error) {
      console.error('Error loading quotes from localStorage:', error); // Logging error if failed to load quotes
    }
  };

  const handleSaveToLocal = () => { // Function to save quotes to local storage
    localStorage.setItem('quotes', JSON.stringify(quotes)); // Saving quotes to local storage
    console.log('Quotes saved to local storage'); // Logging success message
  };

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Error state
  }

  return (
    <div>
      <h3>List of Quotes - {topics}</h3> 
      <button onClick={handleLoad}>Load</button> 
      <button onClick={handleSaveToLocal}>Save to Local Storage</button> 

      {quotes.map((quote, index) => ( // Mapping through quotes array and displaying each quote
        <blockquote key={index}> 
        {/* Displaying each quote within a blockquote element */}
          <p>
            <strong>Quote:</strong> <q>{quote.quote}</q>
            {/* display */}
          </p>
          <p>
            <strong>Author:</strong> - {quote.author} 
          </p>
          <p>
            <strong>Category:</strong> - {quote.category} 
          </p>
          <button onClick={() => handleDelete(quote)}>Del</button> 
          {/* button */}
          <button onClick={() => selectQuoteToUpdate(quote)}>Update</button> 
          <br /> 
          {/*  Line break */}
        </blockquote>
      ))}
     
      {quoteToUpdate && ( // Conditionally rendering the update form if quoteToUpdate is not null
        <div>
          <h3>Update Quote</h3> 
          <input
            type="text"
            value={formData.quoteText}
            onChange={(e) => setFormData({...formData, quoteText: e.target.value})} // Handling change in quote text input
            placeholder="Enter quote text"
          />

          <input
            type="text"
            value={formData.quoteAuthor}
            onChange={(e) => setFormData({...formData, quoteAuthor: e.target.value})} // Handling change in author input
            placeholder="Enter author"
          />

          <input
            type="text"
            value={formData.quoteCategory}
            onChange={(e) => setFormData({...formData, quoteCategory: e.target.value})} // Handling change in category input
            placeholder="Enter category"
          />
{/* fixed updated Quote findIndex: chatGPT */}
          <button onClick={() => handleUpdate(quotes.findIndex(quote => quote === quoteToUpdate), formData.quoteText, formData.quoteAuthor, formData.quoteCategory)}>Update Quote</button> 
        </div>
      )}
    </div>
  );
};

export default Topics; // Exporting Topics component
