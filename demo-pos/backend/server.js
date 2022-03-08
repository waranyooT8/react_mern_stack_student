const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ result: "ok" });
});

// http://localhost:3000/test1/lek/1234
app.get("/test1/:username/:password", (req, res) => {
  res.json({ result: "test1", echo: req.params });
});

// http://localhost:3000/test1?username=lek&password=555
app.get("/test1", (req, res) => {
  res.json({ result: "test1", echo: req.query });
});

app.post("/login", (req, res) => {
  res.json({ result: "login", echo: req.body });
});

app.get("/product", (req, res) => {
  res.json({ result: "product" });
});

app.get("/transaction", (req, res) => {
  res.json({ result: "transaction" });
});

app.listen(3000, () => console.log("Server is running"));
