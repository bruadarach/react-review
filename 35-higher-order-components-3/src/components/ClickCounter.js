// rce
import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <button onClick={incrementCount}>
        Clicked {count} times {this.props.name}
      </button>
    );
  }
}

export default withCounter(ClickCounter, 5); // incrementNumber = 5
