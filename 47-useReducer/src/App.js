// 2. import useReducer
import React, { useReducer } from "react";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import CounterThree from "./components/CounterThree";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
import DataFetchingOne from "./components/DataFetchingOne";
import DataFetchingTwo from "./components/DataFetchingTwo";

// 1) create a counter in App.js
export const CountContext = React.createContext();

//  1. create a counter in App.js, using the reducer Hook
const initialState = 0;
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

const App = () => {
  // 3. useReducer returns an array with two elements: [ the current state and a dispatch function ]
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div>
        <h1>useReducer for Local State Management</h1>
        <h2>Counter with simple state and action</h2>
        <CounterOne />
        <h2>Counter with State & Action Object</h2>
        <CounterTwo />
        <h2>Counter with multiple useReducer Hooks</h2>
        <CounterThree />
        <h1>useReducer for Global State Management</h1>
        <h2>useReducer + useContext</h2>
        {/* 1. create a counter in App.js, using the reducer Hook */}
        {/* 2. provide and consume the counter context in the required components */}
        Count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
        <h1>useReducer for Data Fetching</h1>
        <h2>Fetching data with useEffect</h2>
        <DataFetchingOne />
        <h2>Fetching data with useReducer</h2>
        <DataFetchingTwo />
      </div>
    </CountContext.Provider>
  );
};

export default App;
