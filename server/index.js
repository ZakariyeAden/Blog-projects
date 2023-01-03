const express = require("express");
const app = express();
const db = require("./config/db");

const cors = require("cors");



(app.use(cors()));
app.use(express.json());

console.log('hello')

const http = require("http");
setInterval(() => {
    http.get("https://salty-beach-75633.herokuapp.com/");
}, 25 * 60 * 1000); 


// Have to parse the data first in order to worl




app.get("/api/get", (req, res) => {
  db.query("SELECT * FROM posts", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});


app.get("/api/delete/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM posts WHERE id = ?",id, (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    });
});


app.get("/api/like/:id", (req, res) => {

  const id = req.params.id;
  db.query(
    "UPDATE posts SET likes = likes + 1 WHERE id = ?",
    id,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});


app.get("/api/getFromId/:id", (req, res) => {
  const id = req.params.id;

    db.query("SELECT * FROM posts WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    });
  });
  
app.post("/api/create", (req, res) => {
  
  console.log('/api/create')

    const username = req.body.userName;
    const title = req.body.title;
    const text = req.body.text;
  
    db.query(
      "INSERT INTO posts (title, post_text, user_name) VALUES (?,?,?)",
      [title, text, username],
      (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
      }
    );
  // Have to parse the data first in order to worl
});
app.post("/api/create", (req, res) => {

    const username = req.body.userName;
    const title = req.body.title;
    const text = req.body.text;
  
    db.query(
      "INSERT INTO posts (title, post_text, user_name) VALUES (?,?,?)",
      [title, text, username],
      (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
      }
    );
  // Have to parse the data first in order to worl
});

const PORT = process.env.PORT || 3001;


app.listen(PORT, () => {console.log(`APP listening on ${PORT}`)});


 // "devStart": "nodemon index.js",