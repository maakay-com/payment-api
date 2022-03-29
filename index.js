require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("tiny"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    "<h1>API Docs</h1><a href='https://github.com/tnbCrow/Crypto-Profile-Dot-Link#api-endpoints'>Docs</a>"
  );
});

module.exports = app;
