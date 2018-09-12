const DEFAULT_STATE = {
  userIp: '127.0.0.1'
}

const user = function (state = DEFAULT_STATE, action) {
  switch (action.type) {
     // saves the token into the state
    case 'SAVE_USER_IP':
      return {
        ...state,
        userIp: action.payload
      }
    // as always, on default do nothing
    default:
      return state
  }
}

export default user
