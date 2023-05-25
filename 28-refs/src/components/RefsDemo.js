// rce
/*  How to create and access Refs?
    1. use `React.create()`
    2. use `Callback Refs`
 */

// This component uses the first approach, using `React.create()`

// 1. focus on input field : as soon as a page is loaded, the input field is focused. (1~3)
// 2. fetch input value : when a button is clicked, the input value is fetched and displayed in alert box. (4~5)

import React, { Component } from "react";

export class RefsDemo extends Component {
  //rconst
  constructor(props) {
    super(props);
    // 1. create a ref
    this.inputRef = React.createRef();
  }

  // 3. call the focus method on the input element
  componentDidMount() {
    console.log(this.inputRef); // {current: input}

    const node = this.inputRef.current;
    console.log(node); // <input type="text">

    this.inputRef.current.focus();
  }

  // 5. create a click handler
  // 5. access the value property of the input element (DOM node), which is available on the current property of the ref
  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        {/* 2. attach the ref to the HTML input element in render method */}
        <input type="text" ref={this.inputRef} />
        {/* 4. fetch the input value */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;
