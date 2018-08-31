import React from "react";
import { Query } from "react-apollo";
import { USER } from "graphql/query";
export default () => (
  <Query query={USER}>
    {({ loading, data: { user } }) => {
      if (loading) return <div />;
      return <div>Hello {user && user.email}</div>;
    }}
  </Query>
);
