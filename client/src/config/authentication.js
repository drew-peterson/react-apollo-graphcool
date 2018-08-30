import Auth0Lock from "auth0-lock";
import { client } from "./apollo";
import { AUTH_USER, USER } from "graphql/query";

const DOMAIN = "drew-test.auth0.com";
const CLIENT_ID = "wGaDG7NRFvq7anbeqa7XSozCau8cPUJa";
const HOST = "http://localhost:8080"; // auth0 api i

export default class Auth {
  constructor() {
    this.lock = new Auth0Lock(CLIENT_ID, DOMAIN, {
      autoclose: true,
      allowAutocomplete: true,
      // closable: false,
      container: "hiw-login-container",
      theme: {
        primaryColor: "#31324F"
      },
      auth: {
        audience: HOST,
        responseType: "token",
        sso: true,
        redirectUrl: "http://localhost:3050/",
        redirect: true
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
}
