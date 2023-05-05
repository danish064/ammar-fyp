// ./src/index.js
// importing the dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

// defining the Express app
const app = express();
// defining an array to work as the database (temporary solution)
const ads = [{ title: "Hello, world (again)!" }];
// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ammar",
});
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});
const basicStats = {
  new_incidences: 0,
  network_attacks: 0,
  web_attacks: 0,
  other_attacks: 0,
};
const packetStats = {
  tcp_packets: 0,
  udp_packets: 0,
  icmp_packets: 0,
  http_packets: 0,
  https_packets: 0,
  ipv6_packets: 0,
  other_packets: 0,
};
// defining an endpoint to return all ads
app.get("/api/stats/basic", (req, res) => {
  connection.query("SELECT * FROM atcount", (err, results, fields) => {
    if (err) throw err;
    console.log(results);
    res.send(results);
  });
});
app.get("/api/stats/packets", (req, res) => {
  connection.query("SELECT * FROM pcount", (err, results, fields) => {
    if (err) throw err;
    console.log(results);
    res.send(results);
  });
});
app.get("/api/stats/logs", (req, res) => {
  connection.query("SELECT * FROM logs", (err, results, fields) => {
    if (err) throw err;
    // console.log(results);
    res.send(results);
  });
});
// starting the server
app.listen(3001, () => {
  console.log("listening on port 3001");
  connection.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
  });
});
