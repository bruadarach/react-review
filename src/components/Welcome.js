// two imports
import React, { Component } from "react";

class Welcome extends Component {
  // step 1: it should extend the component class from React
  // step 2: A Class has to implement a render method which will return null or some HTML
  render() {
    // properties is available through `this.props`
    return (
      <h1>
        Welcome! {this.props.name} loves {this.props.favorite}{" "}
      </h1>
    );
  }
}

// step 3: make export/import connection
export default Welcome;
