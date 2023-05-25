import React, { Component } from "react";

export class DestructureClass extends Component {
  render() {
    const { name, favorite, children } = this.props;
    // const {state1, state2} = this.state
    return (
      <h1>
        Welcome, {name}! let's eat {favorite}
        {children}
      </h1>
    );
  }
}

export default DestructureClass;
