const express = require("express");
const router = express.Router();
const Transactions = require("./models/trans_schema");

router.get("/transaction", async (req, res) => {
  const doc = await Transactions.find();
  res.json(doc);
});

module.exports = router;
