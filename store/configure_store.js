import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer                               from '../reducers';

// import API                                       from '../middleware/api';

let middleware = [];

let enhancers = [
  applyMiddleware(...middleware)
];

export default function(initialState){
  const store = compose(...enhancers)(createStore)(rootReducer, initialState);
  return store;
}
