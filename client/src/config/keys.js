export default (function() {
  if (process.env.NODE_ENV === "development") {
    return {
      GRAPHCOOL_URI: process.env.REACT_APP_GRAPHCOOL_DOMAIN,
      DOMAIN: process.env.REACT_APP_DOMAIN,
      AUTH0_DOMAIN: process.env.REACT_APP_AUTH0_DOMAIN,
      AUTH0_CLIENT_ID: process.env.REACT_APP_AUTH0_CLIENT_ID,
      AUTH0_HOST: process.env.REACT_APP_AUTH0_HOST
    };
  } else if (process.env.NODE_ENV === "production") {
    console.log("PROD ENV", process.env);
    return {
      GRAPHCOOL_URI: process.env.REACT_APP_GRAPHCOOL_DOMAIN,
      DOMAIN: process.env.REACT_APP_DOMAIN,
      AUTH0_DOMAIN: process.env.REACT_APP_AUTH0_DOMAIN,
      AUTH0_CLIENT_ID: process.env.REACT_APP_AUTH0_CLIENT_ID,
      AUTH0_HOST: process.env.REACT_APP_AUTH0_HOST
    };
  }
})();
