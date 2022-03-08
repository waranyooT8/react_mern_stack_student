const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ result: "ok" });
});

app.get("/test1/:username/:password", (req, res) => {
  res.json({ result: "test1", echo: req.params });
});

app.listen(3000, () => console.log("Server is running"));
