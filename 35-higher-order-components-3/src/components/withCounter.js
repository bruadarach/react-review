// file name convention: with<component name>

import React from "react";

// const withCounter = (WrappedComponent) => {
const withCounter = (WrappedComponent, incrementNumber) => {
  class WithCounter extends React.Component {
    // common functionality to share
    constructor(props) {
      super(props);

      this.state = { count: 0 };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        // return { count: prevState.count + 1 };
        return { count: prevState.count + incrementNumber };
      });
    };

    render() {
      console.log(this.props.name);
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props} // pass any other props from the parent component
        />
      );
    }
  }

  return WithCounter;
};

export default withCounter;
