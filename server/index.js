const express = require("express");
const app = express();
const db = require("./config/db");
const mysql = require("mysql2");
const PORT = 3001;
const cors = require('cors');
// const connection = mysql.createConnection({
//   host:"localhost",
//   user:"root",
//   password:"Boss2018!",
//   database:"BlogPost"
// })
// connection.connect();
// connection.connect(function(err) {
//   if(err)
//     throw err;
//     console.log("connect");
//     const sql = "INSERT INTO posts (title, post_text, user_name) VALUES('a title', 'asasassa', 'Zakariye')";
//     connection.query(sql,function(err, result){
//       if(err)
//       throw err;
//       console.log("Success");
//     });
// })
app.use(cors());
app.use(express.json());
// app.get("/", (req, res) => {
db.query(
  "INSERT INTO posts (title, post_text, user_name) VALUES('a title', 'newtest', 'Zakariye')"
);
// });
// app.listen(PORT, () => {
//   console.log(`Server running on Port ${PORT}`);
// });

app.post("/api/create", (req, res) => {
  // Have to parse the data first in order to worl
    const username = req.body.userName;
    const title = req.body.title;
    const text = req.body.text;
  // console.log(username + title + text);

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
