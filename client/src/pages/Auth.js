import React, { Component } from "react";
import { WebAuth } from "config/authentication";
import { Query } from "react-apollo";
import { Redirect } from "react-router-dom";
import { USER } from "graphql/query";
import qs from "query-string";
import { compose } from "recompose";
import { Grid, Header } from "semantic-ui-react";

import loginForm from "components/forms/LoginForm";
import signupForm from "components/forms/SignupForm";
import withAuthHandlers from "components/forms/withAuthHandlers";
const SignupForm = compose(withAuthHandlers)(signupForm);
const LoginForm = compose(withAuthHandlers)(loginForm);

class Auth extends Component {
  state = {
    type: ""
  };
  componentDidMount() {
    const { type } = qs.parse(window.location.search);
    const auth = new WebAuth();
    this.setState({ type, auth });
    // auth.show({ initialScreen: type || "login" });
  }

  renderHeader() {
    const { type } = this.state;
    if (type === "signUp") {
      return "Signup more subtext rubbish";
    }
    return "Login here and get a bunch of cool stuff";
  }
  renderLogin() {
    const { auth, type } = this.state;

    return (
      <Grid stackable centered>
        <Grid.Column width={4}>
          <Header textAlign="center" as="h1" style={{ marginTop: "20%" }}>
            {this.renderHeader()}
          </Header>
        </Grid.Column>
        <Grid.Column width={5}>
          {/* <div id="hiw-login-container" /> */}
          {auth && type === "login" && <LoginForm onSubmit={auth.login} />}
          {auth && type === "signUp" && <SignupForm onSubmit={auth.signup} />}
        </Grid.Column>
      </Grid>
    );
  }

  render() {
    return (
      <Query query={USER}>
        {({ data: { user } }) => {
          return user ? <Redirect to="/" /> : this.renderLogin();
        }}
      </Query>
    );
  }
}

export default Auth;
