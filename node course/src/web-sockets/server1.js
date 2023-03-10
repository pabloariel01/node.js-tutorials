import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log(`connected to ${socket.client.id}`);

  socket.on("newNumber", (data) => {
    console.log(data);
    // socket.emit("someEvent2", { message: "hello!" });
  });

  socket.on("disconnect", () => {
    console.log(`disconected from ${socket.client.id}`);
  });
});

server.listen(8000, () => {
  console.log("waiting for connections");
});
