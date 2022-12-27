
const mysql = require('mysql2');

const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"Boss2018!",
  database:"BlogPost"
})
module.exports = db