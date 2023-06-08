import React, { Component } from "react";
import LifecycleMethodMountingChildComponent from "./LifecycleMethodMountingChildComponent";

class lifecycleMethodMounting extends Component {
  // rconst
  // 1. constructor
  constructor(props) {
    super(props);

    this.state = {
      name: "Sujeong Ji",
    };

    console.log("1. Parent : lifecycleMountingClass - constructor");
  }

  // 2. static getDerivedStateFromProps
  // this method gets access to props and state as parameters, and
  // has to return the new state or null
  static getDerivedStateFromProps(props, state) {
    console.log(
      "2. Parent : lifecycleMountingClass - getDerivedStateFromProps"
    );
    return null;
  }

  // 4. componentDidMount
  // add before render()
  componentDidMount() {
    console.log("4. Parent :lifecycleMountingClass - componentDidMount");
  }

  // 3. render
  render() {
    console.log("3. Parent :lifecycleMountingClass - render");
    return (
      <div>
        Lifecycle Parent : render
        <LifecycleMethodMountingChildComponent />
      </div>
    );
  }
}

export default lifecycleMethodMounting;
