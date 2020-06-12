const express = require("express");
const app = express();

app.use(express.json());

const users = require("./users");

app.get("/", (_, res) => res.send("Ok"));
app.get("/health", (_, res) => res.send("Healthy"));
app.get("/users", (_, res) => res.send(users));
app.get("/users/:id", (req, res) => {
  const user = users.find((element) => element.id === Number(req.params.id));

  if (user === undefined) return res.sendStatus(404);

  return res.send(user);
});

module.exports = app;
