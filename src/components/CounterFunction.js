import React, { useState, useEffect } from "react";

const CounterFunction = () => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    console.log("callback value:", count);
  }, [count]);

  let increment = () => {
    /* Never modify state directly => no re-rendering UI */
    // count = count + 1;
    // console.log(count);

    setCount(count + 1);
    console.log(count);
  };

  return (
    <>
      <h1>Counter Function: {count}</h1>
      <button
        onClick={() => {
          increment();
        }}
      >
        Click
      </button>
    </>
  );
};

export default CounterFunction;
