import React, { useState } from 'react'; // Importing React and useState hook from React library

const QuoteForm = ({ addNewQuote }) => { // Defining a functional component named QuoteForm, receiving addNewQuote as prop
  const [quoteText, setQuoteText] = useState(''); // Declaring state variable quoteText and setter function setQuoteText using useState hook, initializing with an empty string
  const [quoteAuthor, setQuoteAuthor] = useState(''); // Declaring state variable quoteAuthor and setter function setQuoteAuthor using useState hook, initializing with an empty string
  const [quoteCategory, setQuoteCategory] = useState(''); // Declaring state variable quoteCategory and setter function setQuoteCategory using useState hook, initializing with an empty string

  const handleAddQuote = () => { // Defining a function handleAddQuote
    if (quoteText && quoteAuthor && quoteCategory) { // Checking if all fields are filled
      const newQuoteData = { text: quoteText, author: quoteAuthor, category: quoteCategory }; // Creating a new quote object
      addNewQuote(newQuoteData); // Calling the addNewQuote function passed as prop and passing the new quote object
      saveToLocalStorage(newQuoteData); // Save the quote data to localStorage
      clearInputs(); // Calling the clearInputs function to clear the input fields
      console.log('Quote added:', newQuoteData); // Logging the newly added quote
    } else {
      alert('Please fill in all fields.'); 
    }
  };

  const saveToLocalStorage = (quoteData) => { // Defining a function to save quote data to localStorage
    const existingQuoteData = JSON.parse(localStorage.getItem('quoteData')) || []; // Getting existing quote data from localStorage or initializing as an empty array
    const allQuoteData = [...existingQuoteData, quoteData]; // Combining existing quote data with the new quote data
    localStorage.setItem('quoteData', JSON.stringify(allQuoteData)); // Saving the combined quote data to localStorage
  };

  const clearInputs = () => { // Defining a function to clear input fields
    setQuoteText(''); // Clearing quoteText
    setQuoteAuthor(''); // Clearing quoteAuthor
    setQuoteCategory(''); // Clearing quoteCategory
  };

  const handleSaveToJSON = () => { // Defining a function to save quotes to JSON file
    const existingQuoteData = JSON.parse(localStorage.getItem('quoteData')) || []; // Retrieving existing quote data from localStorage or initializing as an empty array
    const jsonData = { quotes: existingQuoteData }; // Creating JSON data with quotes
    const jsonDataString = JSON.stringify(jsonData); // Converting JSON data to string
    const blob = new Blob([jsonDataString], { type: 'application/json' }); // Creating a blob with JSON data
    const url = URL.createObjectURL(blob); // Creating URL for the blob
    const a = document.createElement('a'); // Creating an anchor element
    a.href = url; // Setting href attribute of anchor element to URL
    a.download = 'quotes.json'; // Setting download attribute of anchor element
    document.body.appendChild(a); // Appending anchor element to the document body
    a.click(); // Programmatically clicking the anchor element
    document.body.removeChild(a); // Removing anchor element from the document body
    URL.revokeObjectURL(url); // Revoking the URL object
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
      <button onClick={handleSaveToJSON}>Save Quotes</button> 
    </div>
  );
};

export default QuoteForm; // Exporting QuoteForm component
