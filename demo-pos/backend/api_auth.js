const express = require("express");
const router = express.Router();
const Users = require("./models/user_schema");
var bcrypt = require("bcryptjs");
const jwt = require("./jwt");

router.post("/login", (req, res) => {
  res.json({ result: "login", echo: req.body });
});

router.post("/register", async (req, res) => {
  try {
    req.body.password = bcrypt.hash(req.body.password, 8);
    const doc = await Users.create(req.body);

    res.json({ result: "ok", doc });
  } catch (error) {
    res.json({ result: "nok", error });
  }
});
module.exports = router;
