const express = require("express");
const router = express.Router();
const Users = require("./models/user_schema");
var bcrypt = require("bcryptjs");
const jwt = require("./jwt");

// login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const doc = await Users.findOne({ username });
    if (doc && bcrypt.compareSync(password, doc.password)) {
      const token = jwt.sign({ username }, 1000000);

      res.json({ result: "ok", token });
    } else {
      res.json({ result: "nok", token: "", error: "invalid account" });
    }
  } catch (e) {
    res.json({ result: "nok", token: "", error: e });
  }
});

// register
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
