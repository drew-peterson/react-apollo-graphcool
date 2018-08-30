import React, { Component } from "react";
import Lock from "config/authentication";
import { Query } from "react-apollo";
import { Redirect } from "react-router-dom";
import { USER } from "graphql/query";

class Auth extends Component {
  componentDidMount() {
    if (!localStorage.getItem("accessToken")) {
      const auth = new Lock();
      auth.show();
    }
  }

  render() {
    return (
      <Query query={USER}>
        {({ loading, data: { user } }) => {
          if (loading) return <div />;
          if (!user) return <div id="hiw-login-container" />;
          return <Redirect to="/" />;
        }}
      </Query>
    );
  }
}

export default Auth;
