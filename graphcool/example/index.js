function displayAuthResults(accessToken) {
  var el = document.getElementById("mutation");
  el.style.visibility = "visible";
  var mutation = `
  # Run this mutation in the Graphcool Playground to authenticate a user

  mutation {
    authenticateUser(
      accessToken: "${accessToken}"
    ) {
      id
      token
    }
  }
  `;
  el.innerHTML = mutation;
}

const DOMAIN = "drew-test.auth0.com";
const ID = "wGaDG7NRFvq7anbeqa7XSozCau8cPUJa";
const HOST = "http://localhost:8080";

// document.addEventListener("DOMContentLoaded", function(event) {
//   var webAuth = new auth0.WebAuth({
//     audience: HOST,
//     clientID: ID,
//     domain: DOMAIN,
//     redirectUri: HOST,
//     responseType: "token",
//     scope: "openid email"
//   });

//   var elButton = document.getElementById("authenticate");
//   elButton.addEventListener("click", function() {
//     webAuth.authorize();
//   });

//   var logout = document.getElementById("logout");
//   logout.addEventListener("click", function() {
//     webAuth.logout({
//       redirectUri: "http://localhost:8080"
//     });
//   });

//   webAuth.parseHash(function(err, authResult) {
//     if (err) return console.error(err);

//     if (authResult && authResult.accessToken) {
//       window.location.hash = "";
//       displayAuthResults(authResult.accessToken);
//     }
//     console.log(authResult);
//   });
// });

// LOCK

document.addEventListener("DOMContentLoaded", function(event) {
  var lock = new Auth0Lock(ID, DOMAIN, {
    theme: {
      primaryColor: "#31324F"
    },
    auth: {
      audience: HOST,
      responseType: "token"
    }
  });

  var elButton = document.getElementById("authenticate");
  elButton.addEventListener("click", function() {
    lock.show();
  });

  var logout = document.getElementById("logout");
  logout.addEventListener("click", function() {
    console.log("logged out...");
    lock.logout({
      //   returnTo: "http:localhost:8080"
    });
  });

  lock.on("authenticated", function(authResult) {
    console.log("authenticated", authResult);

    displayAuthResults(authResult.accessToken);
  });

  lock.on("authorization_error", function(err) {
    console.log("err", err);
  });
});
