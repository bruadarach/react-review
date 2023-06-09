import React, { Component } from "react";
// 9. import axios
import axios from "axios";

class PostForm extends Component {
  constructor(props) {
    super(props);

    // 1. create states
    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  // 5. create a change handler to track the changes and sync the states
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // 8. create a submit handler to submit the data
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    // 10. post the data to the API
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    // 2. destrcuture the states
    const { userId, title, body } = this.state;
    return (
      <div>
        {/* 7. assign the submit handler to the form */}
        <form onSubmit={this.submitHandler}>
          <div>
            {/* 3. assign the states to the input fields */}
            {/* 4. add onChange event handler to track the changes and sync the states */}
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.changeHandler}
            />
          </div>
          {/* 6. add a submit button */}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
