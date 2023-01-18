const express = require("express");
const app = express();
const path = require("path");
app.use(function (req, res, next) {
  const date = new Date();
  if (
    date.getDay >= 1 &&
    date.getDay <= 5 &&
    date.getHours >= 9 &&
    date.getHours <= 17
  ) {
    next();
  } else {
    res.send("<h1>Error</h1>");
  }
});
/// a3ml error page w res.send("<h1>Error</h1>") badelha b res.sendFile() w taw twali oumourk mnadhma

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/contact", function (req, res) {
  res.sendFile(path.join(__dirname, "contact.html"));
});

app.get("/services", function (req, res) {
  res.sendFile(path.join(__dirname, "services.html"));
});
app.get("/style.css", (req, res) => {
  res.sendFile(path.join(__dirname, "style.css"));
});
app.listen(3000);

console.log("Running at Port 3000");
