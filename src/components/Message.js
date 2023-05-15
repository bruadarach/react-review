import React, { Component } from "react";

export class Message extends Component {
  constructor() {
    super();
    this.state = {
      // initialize property
      message: "Message to ",
    };
  }

  changeMessage() {
    this.setState({
      message: "Thank you for subscribing, ",
    });
  }

  render() {
    return (
      <>
        <h1>
          {this.state.message}
          {this.props.name}
        </h1>
        <button
          onClick={() => {
            this.changeMessage();
          }}
        >
          Subscribe
        </button>
      </>
    );
  }
}

export default Message;
