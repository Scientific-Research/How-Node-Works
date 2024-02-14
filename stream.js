const fs = require("fs");
// const server = require("http").createServer();
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  // Solution 1
  //   fs.readFile("test-file.txt", (err, data) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //     res.end(data);
  //   });
  // Solution 2: Stream
  //   const readable = fs.createReadStream("test-file.txt"); // we read the data and as soon as it
  //   // 's ready, we send it to the client=>res.write(chunk). readable.on() is observer or listener
  //   // which listens to the createReadStream() and when a piece of the data is ready, it will
  //   // get it and send it to the output!
  //   // but in Solution 1, we have to wait till all the data is ready, once it is ready, it will
  //   // sen dit to the output => res.end(data)
  //   readable.on("data", (chunk) => {
  //     res.write(chunk);
  //   });
  //   // we have to handle the event too, when all the data is there and streaming is finished!
  //   readable.on("end", () => {
  //     res.end(); // no more data will be write to this writable string!
  //     // we don't send any data in res.end() unlike Solution 1.
  //   });
  //   readable.on("error", (err) => {
  //     console.log(err);
  //     res.statusCode = 500;
  //     res.end("File not found");
  //   });
  // Solution 3 // the writing the data on Browser is not as fast as reading it from the source
  // we have to use here pipe operator: => pipe make the data transfer very direct and the speed
  // of both side stay in a very high speed!
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
  // readableStreamSource.pipe(writableDestination)
});

// before to test it, we have to run the server first:
const PORT = 8000;
server.listen(PORT, "127.0.0.1", () => {
  console.log(`The Server is listening on PORT ${PORT}`);
});
