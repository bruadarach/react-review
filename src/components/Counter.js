import React, { Component } from "react";

export class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  // increment() {
  //   this.state.count = this.state.count + 1;
  //   console.log(this.state.count);
  // }

  increment() {
    this.setState(
      // setState is a asynchronous function.
      // setState(state object, callback function)
      {
        count: this.state.count + 1,
      },
      // this code is executed after the state is set and updated
      () => {
        console.log("callback value", this.state.count);
      }
    );
    // this code is executed before the state is set and updated
    console.log(this.state.count);
  }

  render() {
    return (
      <>
        <h1>Counter - {this.state.count}</h1>
        <button
          onClick={() => {
            this.increment();
          }}
        >
          Increment
        </button>
      </>
    );
  }
}

export default Counter;
