const express = require("express");
const router = express.Router();
const db = require('../db')

/**
 * @GET
 * Get users
 */
router.get("/all", (req, res) => {
  //   Run a query
  db.query(
    "SELECT * FROM `users`",
    (error, data, fields) => {
      if (error) throw error;

      res.render('users-listing', {
        users: [...data]
      });
    }
  );
});

module.exports = router;
