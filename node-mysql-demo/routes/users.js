const express = require("express");
const router = express.Router();
const db = require("../db");
const multer = require("multer");
const path = require("path");

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

// DiskStorage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads");
  },

  filename: function (req, file, cb) {
    const extension = file.mimetype.split("/")[1]; // image/png
    return cb(null, `${file.fieldname}__${Date.now()}.${extension}`);
  },
});

// Upload Config
const upload = multer({
  storage,

  limits: { fileSize: 2048000 },

  fileFilter: function (req, file, cb) {
    const fileExt = path.extname(file.originalname);
    // Check the type of file
    if (
      fileExt !== ".jpg" &&
      fileExt !== ".jpeg" &&
      fileExt !== ".png" &&
      fileExt !== ".gif"
    ) {
      return cb(new Error("Only image files are allowed!"), false);
    }
  
    cb(null, true);
  },
}).single("photo");

/**
 * @POST
 * Upload a photo
 */
router.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.json({
        error: "File type is invalid or size exceeds the limit",
      });
    } else {
      res.send("Photo uploaded successfully")
    }
  });
});

module.exports = router;
