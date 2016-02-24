// i dont think we should use immutable for this because lodash clone shouldnt be that expensive.
import {Constants} from "../actions/counter";
import _           from "lodash";
const initialState = {count: 0};
export default function counter(state = initialState, action) {
  switch(action.type){
    case Constants.DECREMENT:
      state.count -= 1;
      return _.clone(state);
    case Constants.INCREMENT:
      state.count += 1;
      return _.clone(state);
    default:
      return state;
  }
}