import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
  const [productListData, setProductListData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3000/products");
        setProductListData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  console.log(productListData);

  return (
    <main className="flex flex-row">
      {productListData.map((product) => {
        console.log(product);
        return (
          <div key={product._id}>
            <div className="h-60">
              <img src={product.productImgUrl} alt="product image" />
            </div>
            <div>
              <h1> {product.productName} </h1>
              <p>{product.productDescription}</p>
              <p>${product.productPrice}</p>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default ProductList;
