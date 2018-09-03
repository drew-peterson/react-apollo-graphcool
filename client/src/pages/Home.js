import React, { Component } from "react";
import axios from "axios";
import { Segment } from "semantic-ui-react";
import { Layout } from "components/common";

class Home extends Component {
  state = {
    error: false
  };

  async componentDidMount() {
    try {
      const { data } = await axios.get("/api/");
      console.log("API TEST:", data);
    } catch (error) {
      console.log("err", error.response);
    }
  }

  render() {
    // console.log("this.props", this.props);
    if (this.state.error) {
      throw new Error("please work.");
    }

    return (
      <Layout>
        <Segment style={{ height: 1000 }}>
          <h2>Home</h2>
          <p>random test here</p>
          <p>random test here</p>
        </Segment>
        <Segment>
          <p>random test here</p>
          <p>random test here</p>
          <p>random test here</p>
          <p>random test here</p>
        </Segment>
        <Segment>
          <button
            onClick={() => {
              this.setState({ error: true });
            }}
          >
            Error
          </button>
          <div>Bottom of container</div>
        </Segment>
      </Layout>
    );
  }
}
export default Home;
