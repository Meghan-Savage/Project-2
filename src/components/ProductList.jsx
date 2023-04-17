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
    <main>
      {productListData.map((product) => {
        console.log(product);
        return <div key={product._id}>{product.productName}</div>;
      })}
    </main>
  );
};

export default ProductList;
