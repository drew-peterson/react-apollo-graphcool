console.log("KEYS 2", process.env);
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
    return {
      AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
      AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
      AUTH0_HOST: process.env.AUTH0_HOST,
      DOMAIN: process.env.DOMAIN,
      GRAPHCOOL_URI: process.env.GRAPHCOOL_DOMAIN
    };
  }
})();
