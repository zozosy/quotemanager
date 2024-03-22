import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import testReducer from './reducers/testReducer.js'

const store = configureStore({
  reducer: {
    test: testReducer
  }
})

// Middleware to sync data with localStorage
store.subscribe(() => {
  const { quotesData } = store.getState().test;
  localStorage.setItem('quotesData', JSON.stringify(quotesData));
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
