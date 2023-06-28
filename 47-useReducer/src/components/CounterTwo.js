// 1. import useReducer
import React, { useReducer } from "react";

// 3. define the reducer function and initial state

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
// reducer(currentState, action)
// action is an object with a type property that describes the type of action to be performed
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CouterTwo() {
  // 2. create the reducer function
  // useReducer returns an array with two elements: [ the current state and a dispatch function ]
  // dispatch is a function that allows us to execute code corresponding to a particular action type
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>First Count - {count.firstCounter}</div>
      <div>Second Counter - {count.secondCounter}</div>

      {/* 4. use the dispatch function to dispatch an action */}
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement 5
      </button>
      <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
        Increment Counter 2
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
        Decrement Counter 2
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default CouterTwo;
