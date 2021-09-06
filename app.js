const http = require("http");
const ip = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statuesCode = 200;
  res.setHeader("content-type", "text/plain");
  res.end("hello from server!!!");
});
server.listen(port, ip, () => console.log("server running..."));
