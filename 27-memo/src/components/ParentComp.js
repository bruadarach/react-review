// rce

import React, { Component } from "react";
import MemoComp from "./MemoComp";

class ParentComp extends Component {
  // rconst
  constructor(props) {
    super(props);

    this.state = {
      name: "Sujeong",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Sujeong",
      });
    }, 2000);
  }

  render() {
    console.log("********** Parent Component Render **********");
    return (
      <div>
        Parent Component
        {/* How to avoid re-rendering of the components? */}
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
