import React from "react";
import Loadable from "react-loadable";
import { Loader, Button, Container, Header } from "semantic-ui-react";

function Loading(props) {
  if (props.error) {
    return (
      <Container text textAlign="center">
        <Header as="h2">Error Loading Page</Header>
        <Button primary onClick={props.retry}>
          Try Again
        </Button>
      </Container>
    );
  } else if (props.pastDelay) {
    return <Loader>Loading...</Loader>;
  } else {
    return null;
  }
}

export default function MyLoadable(opts) {
  return Loadable(
    Object.assign(
      {
        loading: Loading,
        delay: 200
        // timeout: 10000
      },
      opts
    )
  );
}
