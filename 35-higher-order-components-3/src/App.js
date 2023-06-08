import React from "react";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

const App = () => {
  return (
    <div>
      <ClickCounter name="Sujeong" />
      <HoverCounter />
    </div>
  );
};

export default App;
