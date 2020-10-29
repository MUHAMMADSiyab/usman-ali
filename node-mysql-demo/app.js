const express = require("express");
const app = express();

const port = 3000;

// Setting routes
app.use("/users", require("./routes/users"));

app.listen(port, () => console.log(`Server started on port ${port}`));
