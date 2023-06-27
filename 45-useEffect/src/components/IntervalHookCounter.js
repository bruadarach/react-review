import React, { useEffect, useState } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    // return a function from useEffect() to perform cleanup
    return () => {
      clearInterval(interval);
    };
  }, []); // [] // if we pass an empty array, then the interval will be cleared and set only once
  // [count] // if we pass count as a dependency, then the interval will be cleared and set again every time count changes

  return <div>{count}</div>;
}

export default IntervalHookCounter;
