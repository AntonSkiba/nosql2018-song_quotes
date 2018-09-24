const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/public", express.static(__dirname + "/public"));


app.get("/", (req, res) => {
  console.log("nodejs server");
  res.render("index");
});

app.get("/api", (req, res) => {
  console.log("python server");
  // let xhttp = new XMLHttpRequest();
  // xhttp.onreadystatechange = function() {
  //   if (this.readyState == 4 && this.status == 200) {
  //     res.send(xhttp.responseText);
  //   }
  // };
  // xhttp.open("GET", "http://localhost:5000/ping", true);
  // xhttp.send();
  fetch("http://localhost:5000/ping", {merthod: "GET"}).then((response) => {
    return response.text();
  }).then((response) => {
    res.send(response);
  });
});

app.listen(3000, function () {
  console.log("server started");
});
