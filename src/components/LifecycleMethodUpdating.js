import React, { Component } from "react";
import LifecycleMethodUpdatingChildComponent from "./LifecycleMethodUpdatingChildComponent";

export class LifecycleMethodUpdating extends Component {
  // rconst
  // 0. constructor
  constructor(props) {
    super(props);

    this.state = {
      name: "Sujeong Ji",
    };

    console.log("0. Parent : lifecycleUpdatingClass - constructor");
  }

  // 1. static getDerivedStateFromProps
  // this method gets access to props and state as parameters, and
  // has to return the new state or null
  static getDerivedStateFromProps(props, state) {
    console.log(
      "1. Parent : lifecycleUpdatingClass - getDerivedStateFromProps"
    );
    return null;
  }

  // 0. componentDidMount
  componentDidMount() {
    console.log("0. Parent : lifecycleUpdatingClass - componentDidMount");
  }

  // 2. shouldComponentUpdate
  shouldComponentUpdate() {
    console.log("2. Parent : lifecycleUpdatingClass - shouldComponentUpdate");
    return true;
  }

  // 4. getSnapshotBeforeUpdate
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("4. Parent : lifecycleUpdatingClass - getSnapshotBeforeUpdate");
    return null;
  }

  // 5. componentDidUpdate
  componentDidUpdate() {
    console.log("5. Parent : lifecycleUpdatingClass - componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "Minji Ji",
    });
  };

  // 3. render
  render() {
    console.log("3. Parent :lifecycleUpdatingClass - render");
    return (
      <div>
        Lifecycle Parent : render
        <button onClick={this.changeState}>Change State</button>
        <LifecycleMethodUpdatingChildComponent />
      </div>
    );
  }
}

export default LifecycleMethodUpdating;
