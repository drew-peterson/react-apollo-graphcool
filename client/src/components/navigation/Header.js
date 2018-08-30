import React from "react";
import { Container, Button, Menu, Segment } from "semantic-ui-react";
import { Query } from "react-apollo";
import { NavLink } from "react-router-dom";
import Lock from "config/authentication";
import { USER } from "graphql/query";

class Header extends React.Component {
  state = { auth: "" };
  componentDidMount() {
    const auth = new Lock();
    this.setState({ auth });
  }

  logout = () => {
    this.state.auth.logout();
  };
  render() {
    const { fixed = false } = this.props;
    return (
      <Segment inverted textAlign="center" vertical>
        <Menu
          fixed={fixed ? "top" : null}
          inverted={!fixed}
          pointing={!fixed}
          secondary={!fixed}
          size="large"
        >
          <Container>
            <NavLink exact className="item" to="/" activeClassName="active">
              Home
            </NavLink>

            <Query query={USER}>
              {({ loading, data: { user }, error }) => {
                if (loading) return <span />;
                if (!user) {
                  return (
                    <Menu.Item position="right">
                      <Button inverted={!fixed}>
                        <NavLink to="/auth">Log in</NavLink>
                      </Button>
                      <Button
                        inverted={!fixed}
                        primary={fixed}
                        style={{ marginLeft: "0.5em" }}
                      >
                        <NavLink to="/auth">Sign Up</NavLink>
                      </Button>
                    </Menu.Item>
                  );
                }
                return (
                  <React.Fragment>
                    <NavLink
                      className="item"
                      to="/user"
                      activeClassName="active"
                    >
                      User
                    </NavLink>
                    <Menu.Item position="right">
                      <Button
                        inverted={!fixed}
                        primary={fixed}
                        onClick={this.logout}
                      >
                        Logout
                      </Button>
                    </Menu.Item>
                  </React.Fragment>
                );
              }}
            </Query>
          </Container>
        </Menu>
      </Segment>
    );
  }
}

export default Header;
