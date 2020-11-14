const express = require("express");
const router = express.Router();
const db = require("../db");
const multer = require("multer");

// DiskStorage config
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    return callback(null, "./uploads");
  },

  filename: function (req, file, callback) {
    const extension = file.mimetype.split("/")[1] // image/png
    return callback(null, `${file.fieldname}__${Date.now()}.${extension}`);
  },
});
// Upload Config
const upload = multer({
  storage,
});

/**
 * @GET
 * Get users
 */
router.get("/all", (req, res) => {
  //   Run a query
  db.query("SELECT * FROM `users`", (error, data, fields) => {
    if (error) throw error;

    res.render("users-listing", {
      users: [...data],
    });
  });
});

router.get("/:id/edit", (req, res) => {
  const q = `SELECT * FROM users WHERE id = ${req.params.id}`;

  db.query(q, (err, data) => {
    if (data.length === 0) {
      return res.send("<h1>404 - Not Found</h1>");
    }

    // res.json(data[0])

    res.render("user-edit", {
      user: data[0],
    });
  });
});

/**
 * @GET
 * Show the form for uploading photo
 */
router.get("/upload-demo", (req, res) => {
  res.render("uploadDemo");
});

/**
 * @POST
 * Upload a photo
 */
router.post("/upload", upload.array("photos"), (req, res) => {
  res.send("Photo uploaded");
});

module.exports = router;
