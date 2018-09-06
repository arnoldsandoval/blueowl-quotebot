const DEFAULT_STATE = {
  activeQuote: {
    quote: "I haven't failed. I've just found 10,000 ways that don't work.",
    author: 'Thomas Jefferson'
  },
  previousQuotes: []
}

const ui = function (state = DEFAULT_STATE, action) {
  switch (action.type) {
     // saves the token into the state
    case 'SAVE_QUOTE':
      return {
        ...state,
        previousQuotes: [
          ...state.previousQuotes,
          action.payload
        ]
      }
    // as always, on default do nothing
    default:
      return state
  }
}

export default ui
