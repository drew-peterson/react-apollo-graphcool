import React from "react";
import { Query } from "react-apollo";
import { USER } from "graphql/query";
import { Layout } from "components/common";
import { Segment } from "semantic-ui-react";
export default () => (
  <Query query={USER}>
    {({ loading, data: { user } }) => {
      if (loading) return <div />;
      return (
        <Layout>
          <Segment>Hello {user && user.email}</Segment>
        </Layout>
      );
    }}
  </Query>
);
