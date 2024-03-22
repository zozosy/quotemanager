/**
 * Below is an example of a simple reducer, just added it to get the redux toolkit setup going
 * You'll need to make your own reducers, with actions as well to facilitate redux-toolkit
 */

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    quotesData: [{
            "quote": "The only true wisdom is in knowing you know nothing.",
            "author": "Socrates",
            "category": "wisdom"
        },
        {
            "quote": "With the new day comes new strength and new thoughts.",
            "author": "Eleanor Roosevelt",
            "category": "empowerment"
        },
        {
            "quote": "The best thing to hold onto in life is each other.",
            "author": "Audrey Hepburn",
            "category": "romance"
        },
        {
            "quote": "The language of friendship is not words but meanings.",
            "author": "Henry David Thoreau",
            "category": "companionship"
        },
        {
            "quote": "The secret to humor is surprise.",
            "author": "Aristotle",
            "category": "humor"
        },
        {
            "quote": "The only way to find true happiness is to risk being completely cut open.",
            "author": "Chuck Palahniuk",
            "category": "spiritual"
        },
        {
            "quote": "One language sets you in a corridor for life. Two languages open every door along the way.",
            "author": "Frank Smith",
            "category": "multilingual"
        },
        {
            "quote": "Life is what happens when you're busy making other plans.",
            "author": "John Lennon",
            "category": "miscellaneous"
        }
    ],
}

const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        setQuotes(state, action) {
            state.quotesData = action.payload.quotesData;
        }
    }
})

export const { setQuotes } = testSlice.actions
export default testSlice.reducer