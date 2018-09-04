import React, { Component } from "react";
import Routing from "config/routing";
import { Container, Grid } from "semantic-ui-react";
import Header from "components/navigation/Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "config/apollo";
import ErrorBoundary from "config/ErrorBoundary";

const Footer = () => (
  <Container textAlign="center" text style={{ padding: 20 }}>
    Footer here
  </Container>
);

class App extends Component {
  render() {
    const { Column } = Grid;
    return (
      <ErrorBoundary>
        <Provider>
          <BrowserRouter>
            <main id="main" style={{ background: "#F5F5F5" }}>
              <Header />
              <Container>
                <Grid padded>
                  <Column>
                    <Routing />
                  </Column>
                </Grid>
              </Container>
              <Footer />
            </main>
          </BrowserRouter>
        </Provider>
      </ErrorBoundary>
    );
  }
}

export default App;
