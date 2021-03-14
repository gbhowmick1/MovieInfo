const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(__dirname + "/dist/movie-info-search"));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/movie-info-search/index.html"));
});
app.listen(process.env.PORT || 8080);
