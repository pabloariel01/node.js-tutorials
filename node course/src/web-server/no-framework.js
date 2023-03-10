import http from "http";

const PORT = 3000;
const server = http.createServer((req, res) => {
    const { url } = req;
    console.log("request", url);

  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>HOME</h1>");
  } else if (url === "/user") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>users</h1>");
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>not found</h1>");
  }
  res.end();
});

server.listen(PORT, () => {
  console.log("listeinig on port " + PORT);
});
