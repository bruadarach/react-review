import React from "react";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import User from "./components/User";
import Counter from "./components/Counter";

const App = () => {
  return (
    <div>
      {/* 1. prep */}
      {/* <ClickCounter />
      <HoverCounter /> */}
      {/* <User name="Sujeong" /> */}
      {/* <User name={() => "Sujeong"} /> */}
      {/* <User render={(isLoggedIn) => (isLoggedIn ? "Sujeong" : "Guest")} /> */}

      {/* 2. with render props */}
      {/* <Counter
        render={(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      />

      <Counter
        render={(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      /> */}

      {/* 3. with children props */}
      <Counter>
        {(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      </Counter>

      <Counter>
        {(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      </Counter>
    </div>
  );
};

export default App;
