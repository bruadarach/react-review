import React from "react";

const Hello = () => {
  //   return (
  //     <div id="hello" className="dummyClass">
  //       <h1>Hello Sujeong Ji</h1>
  //     </div>
  //   );

  return React.createElement(
    "div",
    { id: "hello", className: "dummyClass" },
    React.createElement("h1", null, "Hello, Sujeong Ji")
  );
};

export default Hello;
