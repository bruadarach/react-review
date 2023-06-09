import React from "react";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/useContext";

const App = () => {
  return (
    <div className="App">
      {/* 4. provide a value to the context object */}
      <UserProvider value="Sujeong">
        <ComponentC />
      </UserProvider>
    </div>
  );
};

export default App;
