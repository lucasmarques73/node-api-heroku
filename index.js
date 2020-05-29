const express = require("express");
const app = express();
const port = 3000;

app.get("/", (_, res) => res.send("OK"));

app.listen(process.env.PORT || port, () =>
  console.log(`Server running in ${port}`)
);
