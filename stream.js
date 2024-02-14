const fs = require("fs");
// const server = require("http").createServer();
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  // Solution 1
  fs.readFile("test-file.txt", (err, data) => {
    if (err) {
      console.log(err);
    }
    res.end(data);
  });
});

// before to test it, we have to run the server first:
const PORT = 8000;
server.listen(PORT, "127.0.0.1", () => {
  console.log(`The Server is listening on PORT ${PORT}`);
});
