import { SET_QUOTES, DELETE_QUOTE, UPDATE_QUOTE, SET_QUOTE_TO_UPDATE, SET_FORM_DATA } from '../actions/actionstopic';

const initialState = {
  quotes: [],
  quoteToUpdate: null,
  formData: {
    quoteText: '',
    quoteAuthor: '',
    quoteCategory: ''
  }
};

const topicsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUOTES:
      return {
        ...state,
        quotes: action.payload
      };
    case DELETE_QUOTE:
      return {
        ...state,
        quotes: state.quotes.filter(quote =>
          !(quote.quote === action.payload.quote && quote.author === action.payload.author && quote.category === action.payload.category)
        )
      };
    case UPDATE_QUOTE:
      return {
        ...state,
        quotes: state.quotes.map(quote =>
          quote.quote === action.payload.quoteToUpdate && quote.author === action.payload.author && quote.category === action.payload.category ?
          action.payload : quote
        )
      };
    case SET_QUOTE_TO_UPDATE:
      return {
        ...state,
        quoteToUpdate: action.payload
      };
    case SET_FORM_DATA:
      return {
        ...state,
        formData: action.payload
      };
    default:
      return state;
  }
};

export default topicsReducer;