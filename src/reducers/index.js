import { combineReducers } from 'redux'

import quote from './quote' // contains current and previous quotes
import user from './user' // contains ip...

export default combineReducers({
  quote: quote,
  user: user
})
