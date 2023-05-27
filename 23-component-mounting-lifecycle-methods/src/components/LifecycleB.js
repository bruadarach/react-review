// rce
import React, { Component } from "react";

class LifecycleB extends Component {
  //rconst
  // 1. constructor
  constructor(props) {
    super(props);
    this.state = {
      name: "Sujeong",
    };
    console.log("LifecycleB - 1. constructor");
  }

  // 2. static getDerivedStateFromProps
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB - 2. getDerivedStateFromProps");
    return null;
  }

  // 4. componentDidMount
  componentDidMount() {
    console.log("LifecycleB - 4. componentDidMount");
  }

  render() {
    // 3. render
    console.log("LifecycleB - 3. render");
    return <div>Lifecycle B</div>;
  }
}

export default LifecycleB;
