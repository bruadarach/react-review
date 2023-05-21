// rpce
import React, { PureComponent } from "react";

export class PureComponentClass extends PureComponent {
  render() {
    return <div>Pure Component - Class {this.props.name}</div>;
  }
}

export default PureComponentClass;
