import express from "express";

const app = express();
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Hello from express!!");
});

const users = [{ name: "peter", age: 33, id: 1 }];
app.get("/users", (req, res) => {
  res.send(users);
});
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id == Number(id));
  res.send(user);
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.send(users);
});

app.listen(3000, () => {
  console.log("express listening on port 3000");
});
