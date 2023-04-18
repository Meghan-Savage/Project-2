import mongoose from "mongoose";

const Schema = mongoose.Schema;

/* This code defines a product schema using the 
Mongoose library. The schema defines the structure 
of a product object, including the properties it 
should have and their data types. */

const productSchema = new Schema({
  productName: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productDescription: {
    type: String,
    required: false,
  },
  productImgUrl: {
    type: String,
    required: false,
  },
});

/* The mongoose.model() method is used to create a 
new model called "Product" based on the productSchema 
and to map it to a collection called "products" in a 
MongoDB database. This model can be used to interact 
with the database and perform CRUD (create, read, update, delete) 
operations on product data. */
export default mongoose.model("Product", productSchema, "products");



