//rce
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return (
      // Counter component does not render anything on its own.
      // It just provides the state and the incrementCount method to the component that is passed as a prop

      // <div>{this.props.render(this.state.count, this.incrementCount)}</div>
      <div>{this.props.children(this.state.count, this.incrementCount)}</div>
    );
  }
}

export default Counter;
