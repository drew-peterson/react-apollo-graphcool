import React from "react";
import { Container } from "semantic-ui-react";

export const Layout = ({ children, ...other }) => {
  return (
    <Container {...other} fluid>
      {children}
    </Container>
  );
};
