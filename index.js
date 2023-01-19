const express = require("express");
const app = express();
const path = require("path");

app.use((req, res, next) => {
  const time = new Date();
  const day = time.getDay();
  const hour = time.getHours();
  if (day >= 1 && day <= 5 && hour >= 9 && hour <= 20) {
    next();
  } else {
    res.status(404).sendFile(path.join(__dirname, "/My-app/404.html"));
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
