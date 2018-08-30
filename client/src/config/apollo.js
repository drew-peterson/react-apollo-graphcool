import React from "react";
import { ApolloProvider, graphql } from "react-apollo";
import ApolloClient from "apollo-boost";
import { Message } from "semantic-ui-react";
import keys from "config/keys";
// import gql from "graphql-tag";
export const client = new ApolloClient({
  // uri: "/graphql"
  // uri: "https://api-uswest.graphcms.com/v1/cjlbn9gc80icg01fz8j4asr8p/master",
  uri: keys.GRAPHCOOL_URI,
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

// client
//   .query({
//     query: gql`
//       {
//         hello {
//           message
//         }
//       }
//     `
//   })
//   .then(res => console.log("graphcool", res && res.data.hello));

// graphcms test...
// client
//   .query({
//     query: gql`
//       {
//         posts {
//           header
//           description
//         }
//       }
//     `
//   })
//   .then(res => console.log("cms", res));

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
