const http = require("http");

const express = require("express");
const { start } = require("repl");

const app = express();

app.use((req, res, next) => {
  res.send("<h1>Hello</h1>");
});

app.listen(3000);
