const express = require("express");
const app = express();
const path = require("path");

const PORT = 3000;

app.get("/", (req, res) => {
  res.json({ name: "John", age: 34 });
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "about.html"));
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
