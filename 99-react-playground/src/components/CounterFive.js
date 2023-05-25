import React, { Component } from "react";

export class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  //   increment() {
  //     this.setState({ count: this.state.count + 1 }, () => {
  //       console.log("callback value", this.state.count);
  //     });
  //     console.log(this.state.count);
  //   }

  increment() {
    // you are not using the current state. Instead, we are always using the previous state.
    this.setState((prevState, props) => ({
      count: prevState.count + 1,
      //count: prevState.count + props.addValue,
    }));
    console.log(this.state.count);
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <>
        <h1>Counter - {this.state.count}</h1>
        <button
          onClick={() => {
            this.incrementFive();
          }}
        >
          Increment
        </button>
      </>
    );
  }
}

export default Counter;
