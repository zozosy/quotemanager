export const SET_QUOTES = 'SET_QUOTES';
export const DELETE_QUOTE = 'DELETE_QUOTE';
export const UPDATE_QUOTE = 'UPDATE_QUOTE';
export const SET_QUOTE_TO_UPDATE = 'SET_QUOTE_TO_UPDATE';
export const SET_FORM_DATA = 'SET_FORM_DATA';

export const setQuotes = (quotes) => ({
  type: SET_QUOTES,
  payload: quotes
});

export const deleteQuote = (quoteToDelete) => ({
  type: DELETE_QUOTE,
  payload: quoteToDelete
});

export const updateQuote = (updatedQuote) => ({
  type: UPDATE_QUOTE,
  payload: updatedQuote
});

export const setQuoteToUpdate = (quote) => ({
  type: SET_QUOTE_TO_UPDATE,
  payload: quote
});

export const setFormData = (formData) => ({
  type: SET_FORM_DATA,
  payload: formData
});