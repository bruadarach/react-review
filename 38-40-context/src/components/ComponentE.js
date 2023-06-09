import React, { Component } from "react";
import ComponentF from "./ComponentF";
import UserContext from "./useContext";

export class ComponentE extends Component {
  // context type 4: if application supports public class fields syntax, you can use static contextType
  static contextType = UserContext;

  render() {
    // context type 3 : access the context value using this.context
    return (
      <div>
        Component E context {this.context}
        <ComponentF />
      </div>
    );
  }
}

// context type 2 : assign a contextType property on the class
// ComponentE.contextType = UserContext;

export default ComponentE;
