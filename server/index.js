const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

console.log("ENV", process.env);
app.get("/", (req, res) => {
  res.send("hi from api");
});

app.listen(5000, err => {
  if (err) {
    console.log("API err", err);
  }
  console.log("Api Listening on port 5000");
});
