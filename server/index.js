const express = require('express')
const app = express()



app.get("/", (req,res) => {
  res.send("Hello Zakariye")
});


app.listen(3001, () => {
  console.log("Running on Port 3001");

});