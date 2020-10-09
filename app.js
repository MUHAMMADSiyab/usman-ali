const express = require("express");
const app = express();
const path = require("path");

const PORT = 3000;

app.use(express.json({ extended: false }));
// Setting view engine
app.set('view engine', 'pug');
// Setting views directory
app.set('views', path.join(__dirname, "templates"))


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



app.get('/test', (req, res) => {
  res.render('test', {
    title: "Custom Title",
    message: "Custom Message",
  });
})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
