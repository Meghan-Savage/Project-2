import Product from "../model/product.js";

export const getProductFromId = async (id) => await Product.findById(id);
