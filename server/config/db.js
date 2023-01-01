
const mysql = require('mysql2');

const db = mysql.createConnection({
  host:"us-cdbr-east-06.cleardb.net",
  user:"bc9883e28ab581",
  password:"1dbc30b0",
  database:"heroku_08509d0775b4d6f"
})

module.exports = db


// host:"localhost",
// user:"root",
// password:"Boss2018!",
// database:"BlogPost"

