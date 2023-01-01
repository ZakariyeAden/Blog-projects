const express = require("express");
const app = express();
const db = require("./config/db");
const request = require('request');
const cors = require("cors");

app.use(cors());
app.use(express.json());


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// app.get('/', (req, res) => {
//   request(
//     { url: 'https://zippy-valkyrie-5048e6.netlify.app/' },
//     (error, response, body) => {
//       if (error || response.statusCode !== 200) {
//         return res.status(500).json({ type: 'error', message: err.message });
//       }

//       res.json(JSON.parse(body));
//     }
//   )
// });

app.get("/api/get", (req, res) => {
  request(
    { url: 'https://zippy-valkyrie-5048e6.netlify.app/api/get' }, 
    )
  db.query("SELECT * FROM posts", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});
app.get("/api/delete/:id", (req, res) => {
  request(
    { url: 'https://zippy-valkyrie-5048e6.netlify.app/api/delete/:id' }, 
    )
    const id = req.params.id;
    db.query("DELETE FROM posts WHERE id = ?",id, (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    });
});

// app.put("/update", (req, res) => {
//   const id = req.body.id;
//   const title = req.body.title;
//   db.query(
//     "UPDATE SET posts title = ? WHERE id = ?",
//     [title,id],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       }
//       res.send(result);
//     }
//   );
// });
app.get("/api/like/:id", (req, res) => {
  request(
    { url: 'https://zippy-valkyrie-5048e6.netlify.app/api/like/:id' }, 
    )
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

app.get('/jokes/random', (req, res) => {
  request(
    { url: 'https://joke-api-strict-cors.appspot.com/jokes/random' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});
app.get("/api/getFromId/:id", (req, res) => {
  const id = req.params.id;
  request(
    { url: 'https://zippy-valkyrie-5048e6.netlify.app/api/getFromId/:id' },
    )
    db.query("SELECT * FROM posts WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    });
  });

app.post("/api/create", (req, res) => {
  request(
    { url: 'https://zippy-valkyrie-5048e6.netlify.app/api/create' }, 
    )
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

const PORT = process.env.PORT || 3002;
// It has to be different then the localhost and from same the http
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
// app.listen(PORT);