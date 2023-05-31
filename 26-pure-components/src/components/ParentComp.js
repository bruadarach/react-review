// rce

import React, { Component } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";

class ParentComp extends Component {
  // rconst
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
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
