const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const PORT = process.env.PORT || 3001;
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "bookingdb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Database connected");
});

server.post("/boka", (req, res) => {
  const { name, time } = req.body;

  // Checka ifall tid fanns
  const aCheckQuery = `SELECT * FROM available_time WHERE time = ?`;
  con.query(aCheckQuery, [time], (aError, aResult) => {
      if (aError) {
          console.error('Error:', aError);
          return;
      }

      if (aResult.length === 0) {
          res.status(400).json({ error: 'Tid inte tillgänglig' });
          return;
      }

      // Fanns = boka tid
      const bookingQuery = `INSERT INTO bookings (name, booking_time) VALUES (?, ?)`;
      con.query(bookingQuery, [name, time], (bookingErr, bookingResult) => {
          if (bookingErr) {
              console.error('Error', bookingErr);
              return;
          }

          console.log('Booking successful');
      });
  });
});


server.post("/tider", (req, res) => {
  const { time } = req.body;

  const sql = `INSERT INTO available_time (time) VALUES (?)`;
  con.query(sql, [time], (err, result) => {
    if (err) {
      console.error('Error:', err);
      return;
    }
    console.log('Data inserted into database');
  });
})

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
