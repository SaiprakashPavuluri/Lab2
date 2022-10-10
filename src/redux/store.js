import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import bookReducer from '../redux/latestnew';

const reducer = combineReducers({
  bookReducer,

});

const store = createStore(reducer, {}, applyMiddleware(thunk));

export default store;
