/* 
      "As your app grows more complex, you'll want to split your reducing function into separate functions, each managing independent parts of the state.

      The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore."

- From the Redux documentation: https://redux.js.org/api/combinereducers
*/

import { combineReducers } from 'redux'
import authReducer from './auth'
import demonsReducer from './demon'

// avoid naming your different state key names with "...Reducer". 
// the keys should only reflect the data thery are holding. 

const reducersCombined = combineReducers({
  authState: authReducer,
  demons: demonsReducer
})

export default reducersCombined