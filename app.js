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

// Setting routes
app.use("/users", require("./routes/users"));
app.use("/students", require("./routes/students"));

// app.get("/", (req, res) => {
//   res.json({ name: "John", age: 34 });
// });

// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "pages", "about.html"));
// });

// app.post("/users", (req, res) => {
//   req.body.name = req.body.name.toUpperCase();
//   res.send(req.body);
// });

// app.get('/test', (req, res) => {
//   res.render('test', {
//     title: "Custom Title",
//     message: "Custom Message",
//   });
// })

// Creating middleware
app.use((req, res, next) => {
  console.log("Current time", Date.now());
  next();
});

app.get("/demo-form", (req, res) => {
  res.render("form");
});

app.post(
  "/demo-form",
  [body("title").not().isEmpty().withMessage("The title field is required")],
  (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log(req.body);
    res.json({ data: req.body });
  }
);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
