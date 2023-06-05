//rce

/*  unlike section 29 that ref is pointing to the class component,
    use `React.forwardRef` to allow the parent component to directly reference the input element (in the child component)
 */

import React, { Component } from "react";
import FRInput from "./FRInput";

class FRParentInput extends Component {
  //rconst
  // 1. create a ref in the parent component
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  // 5. define a method in the parent component to focus the input element in the child component
  // 5. current points to the native DOM element
  clickHandler = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        {/* 2. attach the ref to the child component in the parent component*/}
        <FRInput ref={this.inputRef} />
        {/* 5. define a method in the parent component to focus the input element in the child component */}
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}

export default FRParentInput;
