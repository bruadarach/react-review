import React, { Component } from "react";
import { UserConsumer } from "./useContext";

export class ComponentF extends Component {
  render() {
    return (
      // 5. Consume the value from the context object
      // 5. Pass a function as a child to the UserConsumer component
      <UserConsumer>
        {(username) => {
          return <div>Hello {username}</div>;
        }}
      </UserConsumer>
    );
  }
}

export default ComponentF;
