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

router.get("/:id/edit", (req, res) => {
  
  const q = `SELECT * FROM users WHERE id = ${req.params.id}`;

  db.query(q, (err, data) => {
    if (data.length === 0) {
      return res.send("<h1>404 - Not Found</h1>")
    }

    // res.json(data[0])

    res.render('user-edit', {
      user: data[0],
    })
  })
});

module.exports = router;
