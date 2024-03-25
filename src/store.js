import { configureStore } from '@reduxjs/toolkit'; // Importing configureStore function from Redux Toolkit
import topicsReducer from './reducers/testReducer'; // Importing topicsReducer

const store = configureStore({ // Creating Redux store
  reducer: {
    topics: topicsReducer // Adding topicsReducer to the store
  }
});

export default store; // Exporting the Redux store
