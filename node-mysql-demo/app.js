const express = require("express");
const app = express();
const path = require('path');

const port = 3000;

app.use(express.json({ extended: false }))
app.use(express.urlencoded({ extended: false }))

// Setting routes
app.use("/users", require("./routes/users"));
app.use("/email", require("./routes/mails"));

// Setting view engine
app.set("view engine", "ejs");
// Setting views directory
app.set("views", path.join(__dirname, "templates"));

// Set static
app.use(express.static(__dirname + '/public'));

app.listen(port, () => console.log(`Server started on port ${port}`));
