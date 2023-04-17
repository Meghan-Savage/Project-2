import Product from "../../src/model/product.js";

export const displayProducts = async (req, res) => {
  try {
    const products = await Product.find();
    console.log(products);
    res.send(products);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};

export const clientProfile = (req, res) => {
  res.send("<h1>client profile</h1>");
};

export const createClientProfile = (req, res) => {
  res.send("<h1>create client profile</h1>");
};
