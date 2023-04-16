import React from "react";
import BlockInput from "../util/BlockInput";

const AddProductForm = () => {
  return (
    <form action="/admin/add-product" method="POST">
      <BlockInput type="text" placeholder="Product Name" name="productName" />
      <BlockInput
        type="number"
        placeholder="Price of Product"
        min="0"
        max="10"
        name="productPrice"
      />
      <BlockInput
        type="text"
        placeholder="Product Description"
        name="productDescription"
      />
      <BlockInput
        type="text"
        placeholder="Product Image URL"
        name="productImgUrl"
      />
      <button
        className="w-64 m-6 text-white bg-lime-500 hover:bg-lime-600 block"
        type="submit"
      >
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;
