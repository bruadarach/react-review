import React, { useState, useMemo } from "react";

const Counter = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementCounterOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementCounterTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  //   const isEven = () => {
  //     // it slows down the rate at which the counter is incremented
  //     let i = 0;
  //     while (i < 2000000000) i++;
  //     return counterOne % 2 === 0;
  //   };

  const isEven = useMemo(() => {
    // it slows down the rate at which the counter is incremented
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <button onClick={incrementCounterOne}>Counter One: {counterOne}</button>
      {/* <span>{isEven() ? "Even" : "Odd"}</span> */}
      <span>{isEven ? "Even" : "Odd"}</span>
      {/* the second button becomes slows too because of the isEven() function after re-rendering */}
      <button onClick={incrementCounterTwo}>Counter Two: {counterTwo}</button>
    </div>
  );
};

export default Counter;
