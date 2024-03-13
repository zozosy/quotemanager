import React, { useState } from 'react'; // Importing React and useState hook from React library

const QuoteForm = ({ addNewQuote }) => { // Defining a functional component named QuoteForm, receiving addNewQuote as prop
  const [quoteText, setQuoteText] = useState(''); // Declaring state variable quoteText and setter function setQuoteText using useState hook, initializing with an empty string
  const [quoteAuthor, setQuoteAuthor] = useState(''); // Declaring state variable quoteAuthor and setter function setQuoteAuthor using useState hook, initializing with an empty string
  const [quoteCategory, setQuoteCategory] = useState(''); // Declaring state variable quoteCategory and setter function setQuoteCategory using useState hook, initializing with an empty string

  const handleAddQuote = () => { // Defining a function handleAddQuote
    if (quoteText && quoteAuthor && quoteCategory) { // Checking if all fields are filled
      const newQuoteData = { text: quoteText, author: quoteAuthor, category: quoteCategory }; // Creating a new quote object
      addNewQuote(newQuoteData); // Calling the addNewQuote function passed as prop and passing the new quote object
      clearInputs(); // Calling the clearInputs function to clear the input fields
      console.log('Quote added:', newQuoteData); // Logging the newly added quote
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
