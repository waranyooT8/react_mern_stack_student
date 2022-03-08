const express = require("express");
const router = express.Router();
const Users = require("./models/user_schema");

router.post("/login", (req, res) => {
  res.json({ result: "login", echo: req.body });
});

router.post("/register", async (req, res) => {
  try {
    const doc = await Users.create(req.body);
    res.json({ result: "ok", doc });
  } catch (error) {
    res.json({ result: "nok", error });
  }
});
module.exports = router;
