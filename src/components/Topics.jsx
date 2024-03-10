import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import quotesData from '../../data/quotesList.json';

const Topics = () => {
  const { topics } = useParams(); // extracting the topic parameter from the URL (/:topic)
  const [quotes, setQuotes] = useState([]); // holds the filtered quotes based on the selected topic
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // effect hook to update the quotes when the topic changes
      const filteredQuotes = quotesData.topics.filter(
        (quote) => quote.category===topics 
      );
      setQuotes(filteredQuotes); // Set the filtered quotes to the state
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  }, [topics]); // Re-run the effect when the topic changes
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h3>List of Quotes - {topics}</h3>
     {/* Map ovper the filtered quotes and display each quote */}
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

           <br />
         </blockquote>
      ))}
    </div>
  );
};

export default Topics;
