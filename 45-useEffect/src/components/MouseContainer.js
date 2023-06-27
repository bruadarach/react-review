import React, { useState } from "react";
import HookMouse from "./HookMouse";

const MouseContainer = () => {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {/* although the HookMouse component is unmounted, the event listener is
      still active, and the console.log() statement is still being executed. 
      => we need to add a cleanup function to remove the event listener.
      */}
      {display && <HookMouse />}
    </div>
  );
};

export default MouseContainer;
