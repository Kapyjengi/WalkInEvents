import { createStore } from 'redux';
import firstReducer from '../reducers'

const store = createStore(firstReducer);

export default store;