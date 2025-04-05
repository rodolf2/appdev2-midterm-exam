const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const date = new Date();
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(date.toISOString());
  } else if (req.url === "/hello") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World!");
  } else {
    res.writeHead(404, { "content-type": "plain/text" });
    res.end("Page not found!");
  }
});
const port = 3000;
const hostname = "localhost";
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
