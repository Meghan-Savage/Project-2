import Product from "../../src/model/product.js";
import { getProductFromId } from "../../src/util/get-product-by-id.js";

export const displayProducts = (req, res) => {
  const title = "Egg Plant";
  const price = "12.99";

  res.status(400).send(`<h1> ${title} </h1> <p> ${price} </p>`);
  //   this should display all products
};

export const getProduct = async (req, res) => {
  const productId = req.params.id;
  console.log(productId);

  const results = await getProductFromId(productId);
  console.log(results);

  res.send(results);
};

export const addProduct = (req, res) => {
  console.log("req.body", req.body);

  const title = req.body.productName;
  const imageUrl = req.body.productImgUrl;
  const price = req.body.productPrice;
  const description = req.body.productDescription;

  const product = new Product({
    productName: title,
    productPrice: price,
    productDescription: description,
    productImgUrl: imageUrl,
  });

  product.save();

  // function to save data to backend
  //   This should have a form attached to it
  res.status(400);
};

export const patchProduct = (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;

  // function to update data obj in backend

  //  a few but not all variables is replaced ex. title or price and title but not whole data obj
  //   This should have a form attached to it
  res.status(400);
};

export const putProduct = (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;

  // function to overwrite existing data obj in backend
  // ex. everything is replaced
  //   This should have a form attached to it

  res.status(400);
};

export const deleteProduct = (req, res) => {
  const id = req.body.id;

  // function to delete existing data obj in backend
  //   This should have a form attached to it
  res.status(400);
};
