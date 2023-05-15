import { useState } from "react";

const FormFunction = () => {
  // 1. Create a state variable
  const [userName, setUserName] = useState("");
  const [content, setContent] = useState("");
  const [country, setCountry] = useState("southKorea");

  // 6. define a handler for the onSubmit event
  const handleSubmit = (event) => {
    // prevent the default behavior of the form
    event.preventDefault();
    // display the form data on the alert
    alert(`Form data You typed: ${userName}, ${content}, ${country}`);
  };

  return (
    // 5. assign a handler to the onSubmit event
    <form onSubmit={handleSubmit}>
      <div>
        <label>UserName</label>
        {/* 2. assign the state variable to the value attribute */}
        {/* 3. handling the onChange event */}
        <input
          type="text"
          value={userName}
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />
      </div>
      <div>
        <label>Content</label>
        <textarea
          type="textarea"
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
      </div>
      <div>
        <label>Country</label>
        <select
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        >
          <option value="southKorea">South Korea</option>
          <option value="ethiopia">Ethiopia</option>
          <option value="canada">Canada</option>
        </select>
      </div>
      {/* 4. submit the form data */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormFunction;
