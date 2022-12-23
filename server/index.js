const express = require("express");
const app = express();
const db = require("./config/db");
const mysql = require('mysql2');
const PORT = 3001;
const connection = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"Boss2018!",
  database:"BlogPost"
})
// connection.connect();
connection.connect(function(err) {
  if(err)
    throw err;
    console.log("connect");
    const sql = "INSERT INTO posts (title, post_text, user_name) VALUES('a title', 'asasassa', 'Zakariye')";
    connection.query(sql,function(err, result){
      if(err)
      throw err;
      console.log("Success");
    });
})
app.use(express.json());


// .get("/", (req, res) => {
//   db.query("INSERT INTO posts (title, post_text, user_name) VALUES('a title', 'asasassa', 'Zakariye')")
// });


// app.post('/api/create', (req,res) =>{
//   const username = req.body.userName;
//   const title = req.body.title;
//   const text = req.body.text;


// // console.log(username + title + text);
// //   db.query(
// //     "INSERT INTO posts (title, post_text, user_name) VALUES ()", (err,result) => {
// //       if(err){
// //         console.log(err);
// //       }
// //       console.log(result)
// //     }
// //   );
// })
app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
