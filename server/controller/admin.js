import Product from "../../src/model/product.js";
import { getProductFromId } from "../../src/util/get-product-by-id.js";

export const getProduct = async (req, res) => {
  const productId = req.params.id;

  const results = await getProductFromId(productId);

  res.send(results);
};

export const addProduct = (req, res) => {
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
  res.redirect("http://localhost:5173/create-product");
};

export const deleteProduct = async (req, res) => {
  const id = req.body.productId;

  try {
    await Product.findByIdAndRemove(id);
    res.redirect("http://localhost:5173/products");
  } catch (error) {
    console.log(error.message);
  }
};

export const editProduct = async (req, res) => {
  const updateData = {};
  const id = req.body.productId;
  const title = req.body.productName;
  const imageUrl = req.body.productImgUrl;
  const price = req.body.productPrice;
  const description = req.body.productDescription;

  if (title) updateData.productName = title;
  if (imageUrl) updateData.productImgUrl = imageUrl;
  if (price) updateData.productPrice = price;
  if (description) updateData.productDescription = description;

  await Product.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });

  res.redirect(`http://localhost:5173/productId/${id}`);
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
};
