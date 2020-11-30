import { createStore } from 'redux';
import firstReducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  firstReducer,
  composeWithDevTools()
)

export default store