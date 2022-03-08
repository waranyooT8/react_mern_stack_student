const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ result: "ok" });
});

// http://localhost:3000/test1/lek/1234
app.get("/test1/:username/:password", (req, res) => {
  res.json({ result: "test1", echo: req.params });
});

app.listen(3000, () => console.log("Server is running"));
