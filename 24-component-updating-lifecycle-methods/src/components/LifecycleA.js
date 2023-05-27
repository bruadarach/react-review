import React from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends React.Component {
  // 1. constructor - already defined
  constructor(props) {
    super(props);

    this.state = {
      name: "Benjamin",
    };
    console.log("LifecycleA Constructor");
  }

  // 2. static getDerivedStateFromProps - already defined
  // 5. static getDerivedStateFromProps - after change and update state
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  // 4. componentDidMount - already defined
  componentDidMount() {
    console.log("LifecycleA componentDidMount ----- ");
  }

  // 6. shouldComponentUpdate - after change and update state
  shouldComponentUpdate() {
    console.log("LifecycleA shouldComponentUpdate");
    return true;
  }

  // 8. getSnapshotBeforeUpdate - after change and update state
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleA getSnapshotBeforeUpdate");
    return null;
  }

  // 9. componentDidUpdate - after change and update state
  componentDidUpdate() {
    console.log("LifecycleA componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "CodeEvolution",
    });
  };

  // 3. render - already defined
  // 7. render - after change and update state
  render() {
    console.log("LifecycleA render()");
    return (
      <div>
        <div>LifecycleA </div>
        <button onClick={this.changeState}>Change state</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
