import React from "react";

class LifecycleB extends React.Component {
  // 1. constructor - already defined
  constructor(props) {
    super(props);

    this.state = {
      name: "Benjamin",
    };
    console.log("LifecycleB Constructor");
  }

  // 2. static getDerivedStateFromProps - already defined
  // 5. static getDerivedStateFromProps - after change and update state
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB getDerivedStateFromProps");
    return null;
  }

  // 4. componentDidMount - already defined
  componentDidMount() {
    console.log("LifecycleB componentDidMount");
  }

  // 6. shouldComponentUpdate - after change and update state
  shouldComponentUpdate() {
    console.log("LifecycleB shouldComponentUpdate");
    return true;
  }

  // 8. getSnapshotBeforeUpdate - after change and update state
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleB getSnapshotBeforeUpdate");
    return null;
  }

  // 9. componentDidUpdate - after change and update state
  componentDidUpdate() {
    console.log("LifecycleB componentDidUpdate");
  }

  // 3. render - already defined
  // 7. render - after change and update state
  render() {
    console.log("LifecycleB render()");
    return <div>LifecycleB</div>;
  }
}

export default LifecycleB;
