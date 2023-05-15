import React, { Component } from "react";

export class EventBindClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello",
    };

    // approach 4 : bind event handler in the constructor, not in render method
    // this.clickHandler = this.clickHandler.bind(this);
  }

  // clickHandler = () => {
  //   this.setState({
  //     message: "Goodbye!",
  //   });
  // };

  clickHandler() {
    this.setState({
      message: "Goodbye!",
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>

        {/* // approach 1 : working with arrow function */}
        {/* <button onClick={this.clickHandler}>Click</button> */}

        {/* // approach 2 : working with function */}
        {/* // event binds component instance */}
        <button onClick={this.clickHandler.bind(this)}>Click</button>

        {/* // approach 3 : working with function */}
        {/* // event binds component instance */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}

        {/* // approach 4 : bind event handler in the constructor, not in render method */}
        {/* // event binds component instance */}
        {/* <button onClick={this.clickHandler}>Click</button> */}
      </div>
    );
  }
}

export default EventBindClass;
