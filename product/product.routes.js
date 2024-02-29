import express from "express";
import Product from "./product.model.js";

const router = express.Router();

router.post("/product/add", async (req, res) => {
  // extract new product from req.body
  const newProduct = req.body;

  // add new product to db
  await Product.create(newProduct);

  // send response
  return res.status(201).send({ message: "Product is added successfully." });
});

router.get("/product/list", (req, res) => {
  return res.status(200).send("Getting product list..");
});

export default router;
