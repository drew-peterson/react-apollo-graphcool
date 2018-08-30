import React from "react";
import { ApolloProvider, graphql } from "react-apollo";
import ApolloClient from "apollo-boost";
import { Message } from "semantic-ui-react";

export const client = new ApolloClient({
  // uri: "/graphql",
  uri: "https://api.graph.cool/simple/v1/cjlff3bsb7fmj0168pxtlhf63",
  request: operation => {
    const accessToken = localStorage.getItem("accessToken");
    // console.log("accessToken", accessToken);
    operation.setContext({
      headers: {
        authorization: accessToken ? `Bearer ${accessToken}` : ""
      }
    });
  }
});

export const Provider = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export const Error = ({ header, content }) => (
  <Message negative>
    <Message.Header>Oops!!!</Message.Header>
    <p>Sorry something went wrong</p>
  </Message>
);

// class Query extends component {
//   render(){
//     return (){}
//   }
// }

export const Query = async (query, options) => {
  return await graphql(query, options);
};
// export const Muation = () => {};
