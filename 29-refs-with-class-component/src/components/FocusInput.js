// rce
/*
    when we click on the 'Focus Input' button in the parent component,
    the input element in the child component should receive the focus.
*/
import React, { Component } from "react";
import Input from "./Input";

class FocusInput extends Component {
  // 1. create a ref
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }

  // 4. call the focusInput method in the child component
  clilckHandler = () => {
    this.componentRef.current.focusInput();
  };

  render() {
    return (
      <div>
        {/* 2. attach the ref to the child component */}
        <Input ref={this.componentRef} />
        {/* 3. call the focusInput method in the child component, using the ref */}
        <button onClick={this.clilckHandler}>Focus Input</button>
      </div>
    );
  }
}

export default FocusInput;
