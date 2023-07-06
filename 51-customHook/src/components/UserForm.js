import React, { useState } from "react";
import useInput from "../hooks/useInput";

const UserForm = () => {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");

  const [firstName, bindFirstName, resetFistname] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFistname();
    resetLastName();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            // value={firstName}
            // onChange={(e) => setFirstName(e.target.value)}
            {...bindFirstName}
          />
        </div>
        <div>
          <label>Last Name</label>

          <input
            type="text"
            // value={lastName}
            // onChange={(e) => setLastName(e.target.value)}
            {...bindLastName}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
