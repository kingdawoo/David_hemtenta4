const express = require("express");
var mysql = require('mysql');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const server = express();

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "bookingdb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!")
});

server.post("/boka", (req, res) => {
  const { name, time } = req.body;

  const sql = `INSERT INTO bookings (name, time) VALUES (?, ?)`;
  con.query(sql, [name, time], (err, result) => {
      if (err) {
          console.error('Error:', err);
          res.status(500).json({ error: 'Error' });
          return;
      }
      console.log('Data inserted into database');
      res.status(200).json({ message: 'Data inserted successfully' });
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});