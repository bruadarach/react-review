/* How to create a class component
  - 1. by extending the Component class from React
  - 2. by extending the PureComponent class from React

  What is the difference between a class component and a pure component?
  - 1. regular component does not implement the shouldComponentUpdate method, it always returns true by default and re-renders whenever the parent component re-renders
  - 2. pure component implements the shouldComponentUpdate method with a shallow props and state comparison

  What is a shallow comparison?
  - 1. primitive types (string, number, boolean)
    : a (SC) b returns true if a and b have the same value and are of the same type
    : (example) string 'Sujeong' (SC) string 'Sujeong' returns true

  - 2. complex types (object, array) 
  : a (SC) b returns true if a and b reference the exact same object.
  : (example) 
                var a = [1,2,3] 
                var b = [1,2,3]
                var c = a

                a === b // false
                a === c // true

  What's the main concern? When the 'render' method is called in each of the components (Regular Components & Pure Components) ?
  - 1. parent component renders
  - (child components render)
    - 2. regular component renders
    - 3. pure component renders
  - 5. every 2 seconds, setState is called and re-renders the parent component
  - (child components re-render, unless you return false from shouldComponentUpdate)
    - 6. regular component re-renders
    - 7. HOWEVER, pure component NEVER re-renders

  What's the 'Pure Component'?
  : a pure component implements shouldComponentUpdate with a shallow props and state comparison
  : (example)
                SC of prevState with currentState
                SC of prevProps with currentProps
  
  : if there is difference, the component will re-render



  When should you use a pure component?

  The code below deals with a primitive type and prop, 'string', 'Sujeong')

  
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
