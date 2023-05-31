/* How to create a class component
  - 1. by extending the Component class from React
  - 2. by extending the PureComponent class from React

  What is the difference between a class component and a pure component?
  - A pure component implements the shouldComponentUpdate lifecycle method with a shallow props and state comparison.


  When should you use a pure component?
 */

import React, { Component } from "react";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";

class App extends Component {
  render() {
    return (
      <div>
        {/* <PureComp /> */}
        <ParentComp />
      </div>
    );
  }
}

export default App;
