import React from 'react';
import { Link } from 'react-router-dom'; //Importing Link component from react-router-dom


const QuotesHome = () => {
  const generateRandomQuote = { 
    quote:"Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one.",
    author: "C.S. Lewis"
  };//Generating a random quote object

  return (
    <div>
      <h3>Daily Inspiration</h3>
      <div>
        <blockquote>{generateRandomQuote.quote}</blockquote>  
        <p>- {generateRandomQuote.author}</p>
      </div>
      <h3>DiscovUncover Subjects</h3>
      <ul>
        <li>
          <Link to="/topics/wisdom">Wisdom</Link>
        </li>
        <li>
          <Link to="/topics/empowerment">Empowerment</Link>
        </li>
        <li>
          <Link to="/topics/romance">Romance</Link>
        </li>
        <li>
          <Link to="/topics/companionship">Companionship</Link>
        </li>
        <li>
          <Link to="/topics/humor">Humor</Link>
        </li>
        <li>
          <Link to="/topics/spiritual">Spiritual</Link>
        </li>
        <li>
          <Link to="/topics/multilingual">Multilingual</Link>
        </li>
        <li>
          <Link to="/topics/miscellaneous">Miscellaneous</Link>
        </li>
      </ul>
    </div>
  );
}

export default QuotesHome;

