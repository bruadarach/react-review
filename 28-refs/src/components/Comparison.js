import React, { Component } from "react";

export class Comparison extends Component {
  constructor(props) {
    super(props);

    // 1. using React.createRef()
    this.inputRef = React.createRef();

    // 2. using Callback refs : property + function
    this.callbackRef = null;
    this.setCallbackRef = (element) => {
      this.callbackRef = element;
    };
  }

  componentDidMount() {
    // 1. using React.createRef()
    console.log(this.inputRef); // {current: input}
    this.inputRef.current.focus();

    // 2. using Callback refs
    if (this.callbackRef) {
      this.callbackRef.focus(); // no need `current` property
    }
  }

  render() {
    return (
      <div>
        {/* 1. using React.createRef() */}
        <div>using React.createRef()</div>
        <input type="text" ref={this.inputRef} />

        {/* 2. using Callback refs */}
        <div>using callback refs</div>
        <input type="text" ref={this.setCallbackRef} />
      </div>
    );
  }
}

export default Comparison;
