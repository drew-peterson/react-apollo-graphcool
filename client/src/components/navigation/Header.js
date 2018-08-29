import React from "react";
import {
  Container,
  Button,
  Menu,
  Segment,
  Header,
  Icon
} from "semantic-ui-react";

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
      content="Imagine-a-Company"
      inverted
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "1.5em" : "3em"
      }}
    />
    <Header
      as="h2"
      content="Do whatever you want when you want to."
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em"
      }}
    />
    <Button primary size="huge">
      Get Started
      <Icon name="right arrow" />
    </Button>
  </Container>
);

export default ({ children, fixed = false }) => (
  <Segment
    inverted
    textAlign="center"
    // style={{ minHeight: 700, padding: "1em 0em" }}
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
        <Menu.Item as="a" active>
          Home
        </Menu.Item>
        <Menu.Item as="a">Work</Menu.Item>
        <Menu.Item as="a">Company</Menu.Item>
        <Menu.Item as="a">Careers</Menu.Item>
        <Menu.Item position="right">
          <Button as="a" inverted={!fixed}>
            Log in
          </Button>
          <Button
            as="a"
            inverted={!fixed}
            primary={fixed}
            style={{ marginLeft: "0.5em" }}
          >
            Sign Up
          </Button>
        </Menu.Item>
      </Container>
    </Menu>
    {/* <HomepageHeading /> */}
  </Segment>
);
