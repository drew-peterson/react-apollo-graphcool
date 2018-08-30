import React, { Component } from "react";
import Routing from "config/routing";
import { Container } from "semantic-ui-react";
import Header from "components/navigation/Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "config/apollo";
import ErrorBoundary from "config/ErrorBoundary";

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Provider>
          <BrowserRouter>
            <div>
              <Header />
              <Container style={{ marginTop: "1rem" }}>
                <Routing />
              </Container>
            </div>
          </BrowserRouter>
        </Provider>
      </ErrorBoundary>
    );
  }
}

export default App;
