var express = require("express");

var app = express();

app.get("/", function (req, res) {
  res.send("Hola mundo");
});

app.listen(3000, function (err) {
  //if (err != null)
  if (err) return console.log("Hubo un error"), process.exit(1);

  console.log("platzigram escuchando en el puerto 3000");
});
