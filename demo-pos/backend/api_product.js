const express = require("express");
const router = express.Router();
const Products = require("./models/product_schema");
const formidable = require("formidable");
const path = require("path");
const fs = require("fs-extra");

// Upload Image
uploadImage = async (files, doc) => {
  if (files.image != null) {
    var fileExtention = files.image.originalFilename.split(".")[1];
    doc.image = `${doc.product_id}.${fileExtention}`;
    var newpath =
      path.resolve(__dirname + "/uploaded/images/") + "/" + doc.image;

    if (fs.existsSync(newpath)) {
      await fs.remove(newpath);
    }
    await fs.move(files.image.filepath, newpath);

    // Update database
    await Products.findOneAndUpdate({ product_id: doc.product_id }, doc);
  }
};

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
