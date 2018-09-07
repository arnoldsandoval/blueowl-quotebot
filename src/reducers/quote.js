const DEFAULT_STATE = {
  active: {
    id: 0,
    title: 'Thomas Jefferson',
    content: "I haven't failed. I've just found 10,000 ways that don't work.",
    link: "https://blueowl.xyz"
  },
  previous: []
}

const ui = function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case 'SAVE_NEW_QUOTE':
      return {
        ...state,
        active: action.payload
        // previous: [
        //   ...state.previous,
        //   action.payload
        // ]
      }
    case 'SAVE_QUOTE_TO_PREVIOUS':
      return {
        ...state,
        previous: [
          ...state.previous,
          action.payload
        ]
      }
    // as always, on default do nothing
    default:
      return state
  }
}

export default ui
