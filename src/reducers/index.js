import { combineReducers } from 'redux'

import quote from './quote' // contains current and previous quotes
// import robot from './robot' // contains information for our robot buddy
// import user from './user' // contains ip...

export default combineReducers({
  quote: quote
  // robot: robot
})
