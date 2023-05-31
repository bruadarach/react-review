// rce

/*
    Two case check on `parents component`
    - extends Component
    - extends PureComponent
        : after the initial renders, 2 seconds later, there is no re-rendering
        : parents component checks the current state and props, and if there is no change, it does not re-render, and the children components never re-render
*/

import React, { Component, PureComponent } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";

// class ParentComp extends Component {
class ParentComp extends PureComponent {
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
    console.log("********** Parent Component Render **********");
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
