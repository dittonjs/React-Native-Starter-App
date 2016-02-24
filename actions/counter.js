"use strict";
import wrapper from "../constants/wrapper";

const actions = ["INCREMENT", "DECREMENT"];
const requests = [];

export const Constants = wrapper(actions, requests);

export const decrement = ()=>(
  {
    type: Constants.DECREMENT
  }
);
export const increment = ()=>(
  {
    type: Constants.INCREMENT
  }
);
  
