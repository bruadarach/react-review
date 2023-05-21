// rce
import React, { Component } from "react";
import PureRegularComponentClass from "./PureRegularComponentClass";
import PureComponentClass from "./PureComponentClass";

class PureRegularParentComponentClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Sujeong",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Sujeong",
      });
    }, 2000);
  }

  render() {
    return (
      <div>
        Parent Component
        <PureRegularComponentClass name={this.state.name} />
        <PureComponentClass name={this.state.name} />
      </div>
    );
  }
}

export default PureRegularParentComponentClass;
