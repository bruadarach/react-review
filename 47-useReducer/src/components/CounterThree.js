// 1. import useReducer
import React, { useReducer } from "react";

// 3. define the reducer function and initial state
const initialState = 0;
// reducer(currentState, action)
// action is an object with a type property that describes the type of action to be performed
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterThree() {
  // 2. create the reducer function
  // useReducer returns an array with two elements: [ the current state and a dispatch function ]
  // dispatch is a function that allows us to execute code corresponding to a particular action type
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count - {count}</div>
      {/* 4. use the dispatch function to dispatch an action */}
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <div>Count Two - {countTwo}</div>
      {/* 4. use the dispatch function to dispatch an action */}
      <button onClick={() => dispatchTwo("increment")}>Increment</button>
      <button onClick={() => dispatchTwo("decrement")}>Decrement</button>
      <button onClick={() => dispatchTwo("reset")}>Reset</button>
    </div>
  );
}

export default CounterThree;
