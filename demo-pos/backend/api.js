const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  res.json({ result: "login", echo: req.body });
});

router.get("/product", (req, res) => {
  res.json({ result: "product" });
});

router.get("/transaction", (req, res) => {
  res.json({ result: "transaction" });
});

module.exports = router;
