import React, { Component } from "react";

class Home extends Component {
  state = {
    error: false
  };
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
