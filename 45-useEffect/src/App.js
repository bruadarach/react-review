import React from "react";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import ClassMouse from "./components/ClassMouse";
import HookMouse from "./components/HookMouse";
import MouseContainer from "./components/MouseContainer";
import IntervalClassCounter from "./components/IntervalClassCounter";
import IntervalHookCounter from "./components/IntervalHookCounter";
import DataFetching from "./components/DataFetching";
import DataFetchingDependency from "./components/DataFetchingDependency";
import DataFetchingButtonClick from "./DataFetchingButtonClick";

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
      <h1>useEffect to fetch data</h1>
      <DataFetching />
      <h1>useEffect to fetch data with a condition</h1>
      <DataFetchingDependency />
      <h1>useEffect() to fetch data by button click</h1>
      <DataFetchingButtonClick />
    </div>
  );
};

export default App;
