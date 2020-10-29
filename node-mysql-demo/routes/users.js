const express = require("express");
const mysql = require("mysql");
const router = express.Router();

/**
 * @GET
 * Get users
 */
router.get("/all", (req, res) => {
  // Create DB Connection
  const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "testdb",
  });

  connection.connect();

  //   Run a query
  connection.query(
    "SELECT * FROM `users` WHERE `id` = 3",
    (error, data, fields) => {
      if (error) throw error;

      // console.log("Result", results[0]);
      // console.log("Fields", fields);

      res.json(...data);
    }
  );
});

module.exports = router;
