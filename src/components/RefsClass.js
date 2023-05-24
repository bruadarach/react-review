// rce

/*
    1. one way to create access Refs
    - focus on the input element as soon as the page is loaded  
    - fetch the input value when the button is clicked 
*/
import React, { Component } from "react";

class RefsClass extends Component {
  // rconst
  // 1. create a input ref in a constructor using `React.createRef()`
  // 1. it is common to create refs in the constructor so that it can be referenced throughout the component
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    //
    // this.callbackRef = null;
    // this.setCallbackRef = (element) => {
    //   this.callbackRef = element;
    // };
  }

  componentDidMount() {
    console.log(this.inputRef, "this.inputRef");
    const node = this.inputRef.current;
    console.log(node, "node === this.inputRef.current"); // <input type="text">

    // 4. call the `focus` method on this input element.
    // 4. As soon as the page is loaded, the input element is focused.
    this.inputRef.current.focus();
    // 3. call the `focus` method on this input element.
    // 3. call the `focusInput()` method in the `componentDidMount()` lifecycle method
    // 3. (Q) what exactly does the property this.inputRef.current hold after a reference is created?
    // 3. (!) so, let's add the `componentDidMount()` lifecycle hook, and with the hook let's simply log to the console this.inputRef.
    // 3. it is possible to see an object logged in the console, and see a property called `current` of type input. This current property points to the actual DOM node.
    // 3. therefore, to focus on the input element in componentDidMount, we can simply call the `focus()` method on the current property.

    console.log(this.inputRef);
  }

  //   componentDidMount() {
  //     if (this.callbackRef) {
  //       this.callbackRef.focus();
  //     }
  //   }

  // 6. accessing the value property of the input DOM node, which is available as the current property
  // 6. if you click the button, you cna see the input value in an alert box.
  //   clickHandler = () => {
  //     alert(this.inputRef.current.value);
  //   };

  render() {
    return (
      <div>
        {/* 2. attach this ref to the input element in the render method, and to
        attach it to the input element, we use the reserved `ref` attribute */}
        <input type="text" ref={this.inputRef} />
        {/* 5. (another example) fetch the input value */}
        {/* <button onClick={this.clickHandler}>Click</button>
        <input type="text" ref={this.callbackRef} /> */}
      </div>
    );
  }
}

export default RefsClass;
