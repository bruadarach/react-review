import React from "react";
import RefsDemo from "./components/RefsDemo";
import CallbackRefs from "./components/CallbackRefs";
import Comparison from "./components/Comparison";

const App = () => {
  return (
    <div>
      <h1>Using React.createRef()</h1>
      <RefsDemo />
      <h1>Using callback refs</h1>
      <CallbackRefs />
      <h1>Comparison : React.createRef() vs Callback Refs</h1>
      <Comparison />
    </div>
  );
};

export default App;
