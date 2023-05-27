// rce
import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  //rconst
  // 1. constructor
  constructor(props) {
    super(props);
    this.state = {
      name: "Sujeong",
    };
    console.log("LifecycleA - 1. constructor");
  }

  // 2. static getDerivedStateFromProps
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA - 2. getDerivedStateFromProps");
    return null;
  }

  // 4. componentDidMount
  componentDidMount() {
    console.log("LifecycleA - 4. componentDidMount");
  }

  render() {
    // 3. render
    console.log("LifecycleA - 3.render");
    return (
      <div>
        <div>Lifecycle A</div>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
