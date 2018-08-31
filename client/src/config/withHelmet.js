import React, { Component } from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, image }) => (
  <Helmet>
    <title>{image}</title>
    <meta name="description" content={description} />
    <meta property="og:url" content="https://drewpeterson.me" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@" />
    <meta name="twitter:creator" content="@" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
  </Helmet>
);

export default (WrappedComponent, meta) => {
  class WithHelmet extends Component {
    render() {
      return (
        <React.Fragment>
          <Meta meta={meta} />
          <WrappedComponent />
        </React.Fragment>
      );
    }
  }
  return WithHelmet;
};
