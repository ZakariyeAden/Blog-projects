
const mysql = require('mysql2');


const db = mysql.createConnection({
  host:"us-cdbr-east-06.cleardb.net",
  user:"b4388ce570aecc",
  password:"1a240fab",
  database:"heroku_d2b42320a532631",
  // ssl: { rejectUnauthorized: false},
});
// mysql://b4388ce570aecc:1a240fab@us-cdbr-east-06.cleardb.net/heroku_d2b42320a532631?reconnect=true
// mysql://bc9883e28ab581:1dbc30b0@us-cdbr-east-06.cleardb.net/heroku_08509d0775b4d6f?
module.exports = db




