import React from "react";
import ReactDOM from "react-dom";

function PortalDemo() {
  // 1. return `ReactDOM.createPortal` instead of `return`ing JSX
  // 1. ReactDOM.createPortal takes two parameters:
  //    1. JSX to render
  //    2. DOM element to render the DOM Node to mount onto
  return ReactDOM.createPortal(
    // 1st parameter: JSX to render
    <h1>Portal Demo</h1>,
    // 2nd parameter: DOM element to render onto
    document.getElementById("portal-root")
  );
}

export default PortalDemo;
