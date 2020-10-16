const express = require("express");
const app = express();
const path = require("path");
const { body, validationResult } = require("express-validator");

const PORT = 3000;

// Setting req data types
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));
// Setting view engine
app.set("view engine", "pug");
// Setting views directory
app.set("views", path.join(__dirname, "templates"));

app.get("/demo-form", (req, res) => {
  res.render("form");
});

app.post(
  "/demo-form",
  [body("title").not().isEmpty().withMessage("The title field is required")],
  [body("email").isEmail().withMessage("Please provide a valid email address")],
  (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('form', { errors: errors.array() });
    }

    console.log(req.body);
    res.json({ data: req.body });
  }
);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
