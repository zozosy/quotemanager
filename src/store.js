import { configureStore } from '@reduxjs/toolkit';

import topicsReducer from './reducers/testReducer';


const store = configureStore({
  reducer: {
    topics: topicsReducer
  }
});

export default store;