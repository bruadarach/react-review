import React from "react";
// 3. Import the context object
import { UserContext, ChannelContext } from "../App";

const ComponentF = () => {
  return (
    <div>
      {/* 4. Consume the context value */}
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return (
                  <div>
                    User context value {user}, channel context value {channel}
                  </div>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
};

export default ComponentF;
