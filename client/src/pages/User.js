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
        <Layout data-testid="user-page">
          <Segment>
            <h2>Hello {user && user.email}</h2>
          </Segment>
        </Layout>
      );
    }}
  </Query>
);
