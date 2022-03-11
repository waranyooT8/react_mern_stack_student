const express = require("express");
const router = express.Router();
const Transactions = require("./models/trans_schema");

router.get("/transaction", async (req, res) => {
  const doc = await Transactions.aggregate([
    { $sort: { timestamp: -1 } },
    {
      $lookup: {
        from: "users",
        localField: "staff_id",
        foreignField: "_id",
        as: "staff",
      },
    },
  ]);
  res.json(doc);
});

module.exports = router;
