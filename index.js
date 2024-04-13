const express = require("express");
const app = express();

//Express para usar o EJS como o mecanismo de visualização padrão e para usar arquivos estáticos (scripts, imagens,...)
app.set("view engine", "ejs");
app.use(express.static("public"));

//Express irá renderizar o arquivo EJS
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar.ejs");
});

app.listen(8000, (erro) => {
  if (erro) {
    console.log("Ocorreu um erro.");
  } else {
    console.log("Servidor iniciado com sucesso.");
  }
});
