import React from "react";
import Auth0Lock from "auth0-lock";
import { client } from "./apollo";
import { AUTH_USER, USER } from "graphql/query";
import { Redirect } from "react-router-dom";
import { Query } from "react-apollo";
import keys from "config/keys";

export const Lock = class Lock {
  constructor() {
    this.lock = new Auth0Lock(keys.AUTH0_CLIENT_ID, keys.AUTH0_DOMAIN, {
      // autoclose: true,
      allowAutocomplete: true,
      // closable: false,
      container: "hiw-login-container",
      theme: {
        primaryColor: "#31324F"
      },
      auth: {
        audience: keys.AUTH0_HOST,
        responseType: "token",
        sso: true,
        redirectUrl: keys.DOMAIN
        // redirect: true
      }
    });

    this.lock.on("authenticated", async function(authResult) {
      console.log("on authenticated", authResult);

      try {
        const {
          data: { authenticateUser }
        } = await client.mutate({
          variables: { accessToken: authResult.accessToken },
          mutation: AUTH_USER
        });
        localStorage.setItem("accessToken", authenticateUser.token); // set token

        // update user
        client.query({
          query: USER,
          fetchPolicy: "network-only"
        });
      } catch (error) {
        console.log("error", error.message);
      }
    });

    this.lock.on("authorization_error", function(err) {
      console.log("err", err);
    });
  }

  show(options) {
    this.lock.show({ ...options });
  }

  logout() {
    console.log("logout....");
    this.lock.logout();
    localStorage.setItem("accessToken", "");
  }
};

export const authRequired = WrappedComponent => {
  class Auth extends React.Component {
    render() {
      return (
        <Query query={USER}>
          {({ loading, data: { user } }) => {
            if (loading) return <div>loading...</div>;
            if (user) return <WrappedComponent {...this.props} />;
            localStorage.setItem("accessToken", "");
            return <Redirect to="/auth?type=type" />;
          }}
        </Query>
      );
    }
  }
  return Auth;
};
