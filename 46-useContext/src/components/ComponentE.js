// 1. import useContext
import React, { useContext } from "react";
import ComponentF from "./ComponentF";
// 2. import the context
import { UserContext, ChannelContext } from "../App";

const ComponentE = () => {
  // 3. call useContext and pass in the context as an argument
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      <ComponentF />
      {/* 4. use the context value */}
      Hi from ComponentF! User context value {user}, channel context value{" "}
      {channel}
    </div>
  );
};

export default ComponentE;
