const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Bem vindo ao meu site!</h1>");
});

app.get("/blog/:artigo?", function (req, res) {
  var artigo = req.params.artigo;
  if (artigo) {
    res.send("Artigo " + artigo + " ");
  } else {
    res.send("Bem vindo ao meu blog");
  }
});

app.get("/site", function (req, res) {
  var canal = req.query["canal"];
  res.send(canal);
});

app.get("/ola", function (req, res) {
  res.send("Olá ... ?!");
});

app.get("/ola/:nome/:cargo", function (req, res) {
  const nome = req.params.nome;
  const cargo = req.params.cargo;
  res.send("Olá " + nome + " " + cargo);
});

app.listen(8000, function (erro) {
  if (erro) {
    console.log("Ocorreu um erro.");
  } else {
    console.log("Servidor iniciado com sucesso.");
  }
});
