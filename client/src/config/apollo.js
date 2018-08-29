import React from "react";
import { ApolloProvider, graphql } from "react-apollo";
import ApolloClient from "apollo-boost";
import { Loader, Message } from "semantic-ui-react";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: "/graphql"
  // uri: "https://api-uswest.graphcms.com/v1/cjlbn9gc80icg01fz8j4asr8p/master"
});

// const query = gql`
//   {
//     posts {
//       id
//     }
//   }
// `;

// client
//   .query({ query })
//   .then(res => console.log("res", res.data.posts))
//   .catch(err => console.log(err));

export const Provider = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

const Error = ({ header, content }) => (
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
