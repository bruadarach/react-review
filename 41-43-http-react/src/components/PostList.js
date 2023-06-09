import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  //rconst
  constructor(props) {
    super(props);

    // 1. Create a state to store the data
    this.state = {
      posts: [],
      errorMsg: "",
    };
  }

  // 2. Fetch the data from the API
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retrieving data" });
      });
  }

  render() {
    // 3. Render the data
    const { posts, errorMsg } = this.state;
    return (
      <div>
        List of posts
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    );
  }
}

export default PostList;
