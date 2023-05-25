import React from "react";

const PropsChildComponentClass = (props) => {
  return (
    <button onClick={() => props.greetHandler("Child Component")}>
      Greet Parent
    </button>
  );
};

export default PropsChildComponentClass;
