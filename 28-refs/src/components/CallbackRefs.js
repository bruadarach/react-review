// rce
/*  How to create and access Refs?
    1. use `React.create()`
    2. use `Callback Refs`
 */

// This component uses the first approach, using `React.create()`

// 1. focus on input field : as soon as a page is loaded, the input field is focused. (1~3)

import React, { Component } from "react";

export class CallbackRefs extends Component {
  constructor(props) {
    super(props);
    // 1. create Ref : create a property and assign it to null
    this.callbackRef = null;

    // 2. create a method to assign a (input) DOM element to the ref(callbackRef)
    // 2. accept an DOM element as a parameter
    this.setCallbackRef = (element) => {
      this.callbackRef = element;
    };
  }

  componentDidMount() {
    // 3. call the focus method on the input element
    // 3. unlike the previous approach, we don't need to access the `current` property
    if (this.callbackRef) {
      this.callbackRef.focus();
    }
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.setCallbackRef} />
      </div>
    );
  }
}

export default CallbackRefs;
