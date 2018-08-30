import React from "react";
import { Container, Button, Menu, Segment } from "semantic-ui-react";
import Lock from "../../config/authentication";

class Header extends React.Component {
  state = {
    auth: ""
  };
  componentDidMount() {
    const auth = new Lock();
    this.setState({ auth });
  }

  signUp = () => {
    this.state.auth.show({ initialScreen: "signUp" });
  };

  login = () => {
    this.state.auth.show({ initialScreen: "login" });
  };

  logout = () => {
    this.state.auth.logout();
  };

  render() {
    const { children, fixed = false } = this.props;
    return (
      <Segment
        inverted
        textAlign="center" // style={{ minHeight: 700, padding: "1em 0em" }}
        vertical
      >
        <Menu
          fixed={fixed ? "top" : null}
          inverted={!fixed}
          pointing={!fixed}
          secondary={!fixed}
          size="large"
        >
          <Container>
            <Menu.Item active>Home</Menu.Item>
            <Menu.Item position="right">
              <Button inverted={!fixed} onClick={this.login}>
                Log in
              </Button>
              <Button
                inverted={!fixed}
                primary={fixed}
                style={{ marginLeft: "0.5em" }}
                onClick={this.signUp}
              >
                Sign Up
              </Button>
            </Menu.Item>
          </Container>
        </Menu>
        {/* <HomepageHeading /> */}
      </Segment>
    );
  }
}

export default Header;
