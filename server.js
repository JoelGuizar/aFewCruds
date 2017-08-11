const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');
const app = express();

const PORT = 9000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());
app.use(cookieParser());

app.listen(8080);

app.post('/post', (res, req, error) => {
  res.send("onSubmit handler sent");
})
