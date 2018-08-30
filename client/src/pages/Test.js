import React, { Component } from "react";
import { compose } from "recompose";
import { graphql } from "react-apollo";
// import { Query } from "../config/apollo";
import gql from "graphql-tag";
const query = gql`
  {
    user {
      id
      email
    }
  }
`;

class Test extends Component {
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
        <h2>test 2</h2>
        <button
          onClick={() => {
            console.log("click");
            this.setState({ error: true });
          }}
        >
          error
        </button>
      </div>
    );
  }
}
export default compose()(Test);
// graphql(query, {})
