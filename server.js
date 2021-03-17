const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, './dist/movie-info-search')));

app.use('/', express.static(path.join(__dirname,'/dist/movie-info-search/index.html')));
app.listen(process.env.PORT || 8080);

// To Deploy heroku create this server.js
// also write in packag.json file "start": "node server.js" ...

