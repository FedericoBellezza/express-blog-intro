// Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità sulla base di quello che impareremo.
// Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”
// Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
// - Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post e il conteggio, partendo da un array.
// - Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.

const posts = [
  {
    title: "Titolo 1",
    content: "Contenuto del post 1",
    img: "url",
    tags: ["tag 1", "tag 2", "tag 3"],
  },
  {
    title: "Titolo 2",
    content: "Contenuto del post 2",
    img: "url",
    tags: ["tag 1", "tag 2", "tag 3"],
  },
  {
    title: "Titolo 3",
    content: "Contenuto del post 3",
    img: "url",
    tags: ["tag 1", "tag 2", "tag 3"],
  },
  {
    title: "Titolo 4",
    content: "Contenuto del post 4",
    img: "url",
    tags: ["tag 1", "tag 2", "tag 3"],
  },
  {
    title: "Titolo 5",
    content: "Contenuto del post 5",
    img: "url",
    tags: ["tag 1", "tag 2", "tag 3"],
  },
];

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.get("/bacheca", (req, res) => {
  res.json(posts);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
