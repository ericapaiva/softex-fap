const express = require("express");

const app = express();
const porta = ;

app.listen(porta, function () {
  console.log("servidor rodando na porta", +porta);
});

app.get("/projects", (request, response) => {
  return response.send("Hello word!");
});
