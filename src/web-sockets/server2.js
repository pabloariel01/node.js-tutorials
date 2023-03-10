import { io } from "socket.io-client";

const socket = io("http://localhost:8000/");

socket.on("connect", () => {
  console.log("connected");

  setInterval(() => {
    const randomNumber = Math.ceil(Math.random() * 100);
    socket.emit("newNumber", `new Number ${randomNumber}`);
  }, 2000);
});

socket.on("disconnect", () => {
  console.log("disconnected");
});
