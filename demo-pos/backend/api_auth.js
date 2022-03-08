const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  res.json({ result: "login", echo: req.body });
});

module.exports = router;
