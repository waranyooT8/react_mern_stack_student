const express = require("express");
const router = express.Router();
const Products = require("./models/product_schema");

router.get("/product", async (req, res) => {
  const doc = await Products.find();
  res.json(doc);
});

module.exports = router;
