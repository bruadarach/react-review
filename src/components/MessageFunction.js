import React, { useState } from "react";

const MessageFunction = (props) => {
  const [message, setMessage] = useState("Note to "); // initial value

  return (
    <>
      <h1>
        {message}
        {props.name}
      </h1>
      <button
        onClick={() => {
          setMessage("Thank you for checking!");
        }}
      >
        Check
      </button>
    </>
  );
};

export default MessageFunction;
