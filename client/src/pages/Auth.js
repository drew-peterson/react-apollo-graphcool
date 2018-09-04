import React, { Component } from "react";
import { Lock } from "config/authentication";
import { Query } from "react-apollo";
import { Redirect } from "react-router-dom";
import { USER } from "graphql/query";
import qs from "query-string";
import { Grid, Header } from "semantic-ui-react";

class Auth extends Component {
  state = {
    type: ""
  };
  componentDidMount() {
    const { type } = qs.parse(window.location.search);
    const auth = new Lock();
    this.setState({ type });
    auth.show({ initialScreen: type || "login" });
  }

  renderHeader() {
    const { type } = this.state;
    if (type === "signUp") {
      return "Signup more subtext rubbish";
    }
    return "Login here and get a bunch of cool stuff";
  }
  renderLogin() {
    return (
      <Grid stackable centered>
        <Grid.Column width={4}>
          <Header textAlign="center" as="h1" style={{ marginTop: "20%" }}>
            {this.renderHeader()}
          </Header>
        </Grid.Column>
        <Grid.Column width={5}>
          <div id="hiw-login-container" />
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
