const express = require("express");
const router = express.Router();
const Users = require("./models/user_schema");
var bcrypt = require("bcryptjs");
const jwt = require("./jwt");

router.post("/login", (req, res) => {
  Users.findOne({ username: req.body.username })
    .then((doc) => {
      res.json({ result: "login", echo: doc });
    })
    .catch((e) => {
      res.json({ result: "login", echo: e });
    });
});

router.post("/register", async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 8);
    const doc = await Users.create(req.body);

    res.json({ result: "ok", doc });
  } catch (error) {
    res.json({ result: "nok", error });
  }
});
module.exports = router;
