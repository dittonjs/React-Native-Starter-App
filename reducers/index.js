import { combineReducers }              from 'redux';
import settings                         from './settings';
import counter                          from './counter';

const rootReducer = combineReducers({
  settings,
  counter
});

export default rootReducer;