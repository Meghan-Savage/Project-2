import mongoose from "mongoose";

const Schema = mongoose.Schema;

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

export default mongoose.model("Product", productSchema, "products");
