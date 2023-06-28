import React from "react";
import ComponentC from "./components/ComponentC";

// 1. Create a context object
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

const App = () => {
  return (
    <div>
      {/* 2. Wrap the component and Provide a context value */}
      <UserContext.Provider value={"Sujeong"}>
        <ChannelContext.Provider value={"Lucky"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default App;
