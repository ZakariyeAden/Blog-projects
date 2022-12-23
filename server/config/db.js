const sql = require('mysql')

const db = sql.createConnection({
  host:"localhost",
  user:"root",
  password:"Boss2018!",
  database:"BlogPost",
})

module.exports = db