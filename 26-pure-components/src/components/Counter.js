/*
 By returning a new object, 
 you create a new reference for the state or props, 
 indicating that a change has occurred. 
 
 React uses this reference comparison to determine 
 whether a component needs to be re-rendered.

 Here's an example of how to correctly update state or props 
 by returning a new object:
 */

import React, { Component, PureComponent } from "react";

class Counter extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleClick() {
    // Incorrect way: mutating the existing state
    // this.state.counter += 1;

    // Correct way: returning a new object with the updated value
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  }

  render() {
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
        <button onClick={() => this.handleClick()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
