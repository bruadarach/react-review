import React from "react";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import ClassMouse from "./components/ClassMouse";
import HookMouse from "./components/HookMouse";
import MouseContainer from "./components/MouseContainer";
import IntervalClassCounter from "./components/IntervalClassCounter";
import IntervalHookCounter from "./components/IntervalHookCounter";

const App = () => {
  return (
    <div>
      <h1>componentDidMount() and componentDidUpdate() in a Class Component</h1>
      <ClassCounter />
      <h1>useEffect() in a Functional Component</h1>
      <HookCounter />
      <h1>useEffect() run only once</h1>
      {/* <ClassMouse />
      <HookMouse /> */}
      <h1>useEffect() with cleanup</h1>
      <MouseContainer />
      <h1>useEffect() with incorrect dependency</h1>
      <IntervalClassCounter />
      <IntervalHookCounter />
    </div>
  );
};

export default App;
