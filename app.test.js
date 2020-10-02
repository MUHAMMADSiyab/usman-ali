const http = require("http");
const fs = require("fs");
const url = require("url");

const PORT = 3000;
const hostname = "127.0.0.1";

// URL module
const q = url.parse(
  "http://localhost:8080/default.htm?year=2017&month=february",
  true
);

const qs = q.query; // Get query string

console.log("Host", q.host);
console.log("Hostname", q.hostname);
console.log("Port", q.port);
console.log("Protocol", q.protocol);
console.log("Href", q.href);
console.log("Query Strings", qs);

console.log("Month", qs.month);

// fs.writeFile("demo.txt", "Demo Content for test", (err) => {
//   if (err) throw err;
// });

fs.appendFile("demo.txt", " I am something else", (err) => {
  if (err) throw err;
});

// fs.open("abc.txt", "w");

// fs.unlink("abc.txt", function () {});

fs.rename("abc.txt", "newname.txt", function () {});

// Create a basic http server
const server = http.createServer((req, res) => {
  fs.readFile("test.html", function (err, data) {
    if (err) throw err;
    const content = data.toString();

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(content);
    return res.end();
  });
});

server.listen(PORT, hostname, () =>
  console.log(`Server is listening on port ${PORT}`)
);
