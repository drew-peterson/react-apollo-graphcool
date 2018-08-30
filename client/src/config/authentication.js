// import gql from "react-apollo";
import Auth0Lock from "auth0-lock";
import gql from "graphql-tag";
import { client } from "./apollo";

const DOMAIN = "drew-test.auth0.com";
const CLIENT_ID = "wGaDG7NRFvq7anbeqa7XSozCau8cPUJa";
const HOST = "http://localhost:8080"; // auth0 api i

const AUTH_USER = gql`
  mutation AuthenticateUser($accessToken: String!) {
    authenticateUser(accessToken: $accessToken) {
      id
      token
    }
  }
`;

export default class Auth {
  constructor(initialScreen = "login") {
    this.lock = new Auth0Lock(CLIENT_ID, DOMAIN, {
      autoclose: true,
      initialScreen,
      theme: {
        primaryColor: "#31324F"
      },
      auth: {
        audience: HOST,
        responseType: "token"
        // redirect: false
      }
    });

    this.lock.on("authenticated", function(authResult) {
      client
        .mutate({
          variables: { accessToken: authResult.accessToken },
          mutation: AUTH_USER
        })
        .then(({ data: { authenticateUser } }) => {
          localStorage.setItem("accessToken", authenticateUser.token);
        })
        .catch(err => console.log("err", err.message));
    });

    this.lock.on("authorization_error", function(err) {
      console.log("err", err);
    });
  }

  show() {
    this.lock.show();
  }

  logout() {
    this.lock.logout();
    localStorage.setItem("accessToken", "");
  }
}
