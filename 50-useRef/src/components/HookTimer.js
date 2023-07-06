import React, { useEffect, useState, useRef } from "react";

function HookTimer() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    // const interval = setInterval(() => {
    const interval = (intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000));
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      Hook Timer = {timer}
      {/* <button onClick={() => clearInterval(interval)}>Stop</button> */}
      <button onClick={() => clearInterval(intervalRef.current)}>Stop</button>
    </div>
  );
}

export default HookTimer;
