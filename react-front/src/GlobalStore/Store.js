import { createStore, combineReducers } from 'redux';
import firstReducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

/* const reducer = combineReducers({
    first: firstReducer
  })
  
const store = createStore(reducer) */

const store = createStore(
    firstReducer,
    composeWithDevTools()
)

export default store