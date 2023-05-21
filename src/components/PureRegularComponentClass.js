// rce
import React, { Component } from "react";

class PureRegularComponentClass extends Component {
  render() {
    return <div>RegularComponent {this.props.name} </div>;
  }
}

export default PureRegularComponentClass;
