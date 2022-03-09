const express = require("express");
const router = express.Router();
const Products = require("./models/product_schema");
const formidable = require("formidable");

router.get("/product", async (req, res) => {
  const doc = await Products.find();
  res.json(doc);
});

// Add Product
router.post("/product", async (req, res) => {
  try {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      res.json({ result: "ok", err, fields, files });
    });
  } catch (err) {
    res.json({ result: "nok", message: JSON.stringify(err) });
  }
});

module.exports = router;
