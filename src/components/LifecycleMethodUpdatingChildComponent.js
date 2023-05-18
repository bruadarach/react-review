import React, { Component } from "react";

export class LifecycleMethodUpdatingChildComponent extends Component {
  // rconst
  // 0. constructor
  constructor(props) {
    super(props);

    this.state = {
      name: "Sujeong Ji",
    };

    console.log("0. Child! lifecycleUpdatingClass - constructor");
  }

  // 0. static getDerivedStateFromProps
  // this method gets access to props and state as parameters, and
  // has to return the new state or null
  static getDerivedStateFromProps(props, state) {
    console.log("0. Child! lifecycleUpdatingClass - getDerivedStateFromProps");
    return null;
  }

  // 0. componentDidMount
  // add before render()
  componentDidMount() {
    console.log("4. Child! lifecycleUpdatingClass - componentDidMount");
  }

  // 2. shouldComponentUpdate
  shouldComponentUpdate() {
    console.log("2. Child : lifecycleUpdatingClass - shouldComponentUpdate");
    return true;
  }

  // 4. getSnapshotBeforeUpdate
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("4. Child : lifecycleUpdatingClass - getSnapshotBeforeUpdate");
    return null;
  }

  // 5. componentDidUpdate
  componentDidUpdate() {
    console.log("5. Child : lifecycleUpdatingClass - componentDidUpdate");
  }

  // 3. render
  render() {
    console.log("3. Child! lifecycleUpdatingClass - render");
    return <div>Lifecycle Child : render</div>;
  }
}

export default LifecycleMethodUpdatingChildComponent;
