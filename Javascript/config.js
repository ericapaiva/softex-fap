const express = require("express");

const app = express();
const porta = 3011;

app.use(express.json());

app.listen(porta, function () {
  console.log("servidor rodando na porta");
});

app.get("/projects", (resquest, response) => {
  return response.send("Hello word!");
});
