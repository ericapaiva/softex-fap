const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("servidor iniciado");
});

app.get("/", (request, response) => {
  response.send("<h1>Hello word!</h1>");
});
