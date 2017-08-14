const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');
const app = express();

const PORT = 8080;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());
app.use(cookieParser());

app.listen(8080);

app.get('/yo', (res, req, error) => {
  console.log("LOL");
  res.send("onSubmit handler sent");
})
