import http from "http";

const PORT = 3000;
const server = http.createServer((req, res) => {
  console.log("rquest");
});

server.listen(PORT, () => {
  console.log("listeinig on port " + PORT);
});
