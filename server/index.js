const express = require("express");
const app = express();
const db = require("./config/db");

const cors = require('cors')


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("works");
  
// db.query(
//   "INSERT INTO posts (title, post_text, user_name) VALUES('a title', 'newtest', 'Zakariye')"
// );
})


app.get("/api/get", ( req,res) => {

  db.query(
    "SELECT * FROM posts",
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );

})

app.get("/api/getFromId/:id", ( req,res) => {
const id = req.params.id
  db.query(
    "SELECT * FROM posts WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );

})

app.post("/api/create", (req, res) => {
  // Have to parse the data first in order to worl
  const username = req.body.userName;
  const title = req.body.title;
  const text = req.body.text;
 

  db.query(
    "INSERT INTO posts (title, post_text, user_name) VALUES (?,?,?)",[title,text,username],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    }
  );
});
// It has to be different then the localhost and from same the http 
app.listen(3002, () => {
  console.log('Server listening on port 3002')
})
