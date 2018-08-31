import React, { Component } from "react";
import { Lock } from "config/authentication";
import { Query } from "react-apollo";
import { Redirect } from "react-router-dom";
import { USER } from "graphql/query";
import qs from "query-string";

class Auth extends Component {
  componentDidMount() {
    const { type } = qs.parse(window.location.search);
    const auth = new Lock();
    auth.show({ initialScreen: type || "login" });
  }

  render() {
    return (
      <Query query={USER}>
        {({ data: { user } }) => {
          return user ? <Redirect to="/" /> : <div id="hiw-login-container" />;
        }}
      </Query>
    );
  }
}

export default Auth;
