/**
 * Below is an example of a simple reducer, just added it to get the redux toolkit setup going
 * You'll need to make your own reducers, with actions as well to facilitate redux-toolkit
 */

import { createSlice } from '@reduxjs/toolkit'; // Importing createSlice function from Redux Toolkit

const initialState = {
    quotesData:  [ // Initial state for quotesData
        {
          "quote": "The only true wisdom is in knowing you know nothing.",
          "author": "Socrates",
          "category": "wisdom"
        }, // Initial quote object
        {
          "quote": "Wisdom begins in wonder.",
          "author": "Socrates",
          "category": "wisdom"
        },
        {
          "quote": "Knowing others is wisdom, knowing yourself is Enlightenment.",
          "author": "Lao Tzu",
          "category": "wisdom"
        },
        {
          "quote": "With the new day comes new strength and new thoughts.",
          "author": "Eleanor Roosevelt",
          "category": "empowerment"
        },
        {
          "quote": "You have power over your mind - not outside events. Realize this, and you will find strength.",
          "author": "Marcus Aurelius",
          "category": "empowerment"
        },
        {
          "quote": "Don't wait for extraordinary opportunities. Seize common occasions and make them great.",
          "author": "Orison Swett Marden",
          "category": "empowerment"
        },
        {
          "quote": "The best thing to hold onto in life is each other.",
          "author": "Audrey Hepburn",
          "category": "romance"
        },
        {
          "quote": "Love is composed of a single soul inhabiting two bodies.",
          "author": "Aristotle",
          "category": "romance"
        },
        {
          "quote": "The greatest happiness you can have is knowing that you do not necessarily require happiness.",
          "author": "William Saroyan",
          "category": "romance"
        },
        {
          "quote": "The language of friendship is not words but meanings.",
          "author": "Henry David Thoreau",
          "category": "companionship"
        },
        {
          "quote": "Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one.",
          "author": "C.S. Lewis",
          "category": "companionship"
        },
        {
          "quote": "A true friend is someone who is there for you when he'd rather be anywhere else.",
          "author": "Len Wein",
          "category": "companionship"
        },
        {
          "quote": "The secret to humor is surprise.",
          "author": "Aristotle",
          "category": "humor"
        },
        {
          "quote": "I'm writing a book. I've got the page numbers done.",
          "author": "Steven Wright",
          "category": "humor"
        },
        {
          "quote": "I am so clever that sometimes I don't understand a single word of what I am saying.",
          "author": "Oscar Wilde",
          "category": "humor"
        },
        {
          "quote": "The only way to find true happiness is to risk being completely cut open.",
          "author": "Chuck Palahniuk",
          "category": "spiritual"
        },
        {
          "quote": "To be beautiful means to be yourself. You don’t need to be accepted by others. You need to accept yourself.",
          "author": "Thich Nhat Hanh",
          "category": "spiritual"
        },
        {
          "quote": "Be yourself; everyone else is already taken.",
          "author": "Oscar Wilde",
          "category": "spiritual"
        },
        {
          "quote": "One language sets you in a corridor for life. Two languages open every door along the way.",
          "author": "Frank Smith",
          "category": "multilingual"
        },
        {
          "quote": "Language is the road map of a culture. It tells you where its people come from and where they are going.",
          "author": "Rita Mae Brown",
          "category": "multilingual"
        },
        {
          "quote": "If you talk to a man in a language he understands, that goes to his head. If you talk to him in his language, that goes to his heart.",
          "author": "Nelson Mandela",
          "category": "multilingual"
        },
        {
          "quote": "Life is what happens when you're busy making other plans.",
          "author": "John Lennon",
          "category": "miscellaneous"
        },
        {
          "quote": "The only thing necessary for the triumph of evil is for good men to do nothing.",
          "author": "Edmund Burke",
          "category": "miscellaneous"
        },
        {
          "quote": "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
          "author": "Maya Angelou",
          "category": "miscellaneous"
        }
      ]
    }
    

    const testSlice = createSlice({ // Creating a slice of state using createSlice
        name: 'test', // Slice name
        initialState, // Initial state
        reducers: {
            setQuotes(state, action) { // Reducer function to set quotes data
                state.quotesData = action.payload.quotesData; // Updating quotesData with the payload data
            }
        }
    });
    
    export const { setQuotes } = testSlice.actions; // Exporting action creators
    export default testSlice.reducer; // Exporting the reducer function