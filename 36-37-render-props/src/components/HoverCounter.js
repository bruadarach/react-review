// rce
import React, { Component } from "react";

class HoverCounter extends Component {
  // rconst
  // constructor(props) {
  //   super(props);

  //   this.state = { count: 0 };
  // }

  // incrementCount = () => {
  //   this.setState((prevState) => {
  //     return { count: prevState.count + 1 };
  //   });
  // };

  render() {
    // const { count } = this.state;
    const { count, incrementCount } = this.props;
    return (
      <h2 onMouseOver={incrementCount}>
        Hovered {count} times {this.props.name}
        {/* Clicked {this.state.count} times */}
      </h2>
    );
  }
}

export default HoverCounter;
