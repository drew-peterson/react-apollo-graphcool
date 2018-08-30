import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  state = {
    error: false
  };

  async componentDidMount() {
    const res = await axios.get("/api/");
    console.log("res", res);
  }

  render() {
    // console.log("this.props", this.props);
    if (this.state.error) {
      throw new Error("please work.");
    }

    return (
      <div>
        <h2>Home</h2>
        <button
          onClick={() => {
            this.setState({ error: true });
          }}
        >
          Error
        </button>
      </div>
    );
  }
}
export default Home;
