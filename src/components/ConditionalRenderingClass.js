import React, { Component } from "react";

class ConditionalRenderingClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }

  //   render() {
  //     if (this.state.isLoggedIn) {
  //       return <div>Welcome Sujeong</div>;
  //     } else {
  //       return <div>Welcome Guest</div>;
  //     }
  //   }

  //   render() {
  //     let message;
  //     if (this.state.isLoggedIn) {
  //       message = <div>Welcome Sujeong</div>;
  //     } else {
  //       message = <div>Welcome Guest</div>;
  //     }
  //     return <div>{message}</div>;
  //   }
  render() {
    return this.state.isLoggedIn && <div>Welcome Sujeong</div>;
  }
}

export default ConditionalRenderingClass;
