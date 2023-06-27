import ClassCounter from "./components/ClassCounter";
import HookArray from "./components/HookArray";
import HookCounter from "./components/HookCounter";
import HookCounterAdvanced from "./components/HookCounterPrev";
import HookObject from "./components/HookObject";

const App = () => {
  return (
    <div>
      <h1>Counter with Class Component</h1>
      <ClassCounter />
      <h1>Counter : useState() Hook with Functional Component</h1>
      <HookCounter />
      <h1>Counter : useState() Hook with previous state</h1>
      <HookCounterAdvanced />
      <h1>useState() with Object</h1>
      <HookObject />
      <h1>useState() with Array</h1>
      <HookArray />
    </div>
  );
};

export default App;
