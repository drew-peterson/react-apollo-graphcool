import React from "react";
import { Message, Container, Button } from "semantic-ui-react";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: "" };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
    console.log("LOG ERROR with sentry", error);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Container textAlign="center" text>
          <Message negative style={{ marginTop: "20%" }}>
            <Message.Header>Oops something went wrong...</Message.Header>
            <p>secondary error message</p>
          </Message>
          <Button onClick={() => window.location.replace("/")}>Home</Button>
        </Container>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
