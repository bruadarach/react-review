// React.memo() is a higher order component. It's similar to React.PureComponent but for function components instead of classes.
// React.memo() is introduced in React 16.6

import React from "react";

const MemoComp = ({ name }) => {
  // only the parent component is re-rendered after 2 seconds, and the child memo component is not re-rendered
  console.log(`Rendering Memo Component`);
  return <div>{name}</div>;
};

// higher order component
// React.memo() accepts a component, adds something to the component, and returns a new enhanced component
// Our component here is capable of preventing unnecessary re-renders, unless the props change
export default React.memo(MemoComp);
