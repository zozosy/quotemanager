// QuotesHomepage.jsx
import React from 'react';

// Declaring the QuotesHomepage functional component
const QuotesHomepage = () => {
  // Array of quote objects, each containing id, quote, author, and category properties
  const quotes = [
    { id: 1, quote: "Quote 1", author: "Author 1", category: "Category 1" },
    { id: 2, quote: "Quote 2", author: "Author 2", category: "Category 2" },
    { id: 3, quote: "Quote 3", author: "Author 3", category: "Category 3" },
  ];

  // Rendering JSX to display the list of quotes
  return (
    // Wrapper <div> with class name 'quotes-homepage'
    <div className="quotes-homepage">
      {/* Mapping over each quote object in the quotes array */}
      {quotes.map(quote => (
        // Each quote object is wrapped in a <div> with a unique key
        <div key={quote.id}>
          {/* Displaying the quote text */}
          <p>{quote.quote}</p>
          {/* Displaying the author and category */}
          <p>- {quote.author}, {quote.category}</p>
        </div>
      ))}
    </div>
  );
};

// Exporting the QuotesHomepage component as the default export
export default QuotesHomepage;
