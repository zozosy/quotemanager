import React from 'react'; // Importing React library
import ReactDOM from 'react-dom'; // Importing ReactDOM library
import App from './App.jsx'; // Importing the main App component
import './index.css'; // Importing CSS file
import { configureStore } from '@reduxjs/toolkit'; // Importing configureStore function from Redux Toolkit
import { Provider } from 'react-redux'; // Importing Provider component from react-redux
import testReducer from './reducers/testReducer.js'; // Importing testReducer

const store = configureStore({ // Creating Redux store
  reducer: {
    test: testReducer // Adding testReducer to the store
  }
});

// Middleware to sync data with localStorage
store.subscribe(() => {
  const { quotesData } = store.getState().test; // Extracting quotesData from the Redux store state
  localStorage.setItem('quotesData', JSON.stringify(quotesData)); // Storing quotesData in localStorage
});

ReactDOM.render( // Rendering the App component inside the Provider to provide Redux store to the App
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') // Mounting the App component to the root element in the HTML
);
