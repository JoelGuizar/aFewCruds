const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');
const app = express();

const PORT = 8080;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());
app.use(cookieParser());

app.listen(8080, function(){
  console.log("listening on ", PORT);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "/client/index.html"));
  res.end();
})

app.get('/yo', (req, res) => {
  // console.log(__dirname);
  res.send("onSubmit handler sent");
})
