import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
  const [productListData, setProductListData] = useState([]);

  /* This useEffect hook fetches data from a server and 
  sets it in the state variable called productListData. 
  It runs once, immediately after the component mounts, 
  due to the empty array as a second argument */
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

  return (
    <main className="flex flex-row">
      {/* Map function to iterate through each product 
      in an array of productListData */}
      {productListData.map((product) => {
        return (
          <div key={product._id} className="m-4 w-60">
            <div className="h-60">
              <img src={product.productImgUrl} alt="product image" />
            </div>
            <div>
              <h1> {product.productName} </h1>
              <p>{product.productDescription}</p>
              <p>${product.productPrice}</p>
            </div>
            <div>
              <button
                className="w-full m-2 text-white bg-lime-500 hover:bg-lime-600 block"
                type="submit"
              >
                Add To Cart
              </button>
              <button
                className="w-full m-2 text-white bg-lime-500 hover:bg-lime-600 block"
                type="submit"
              >
                Add To Favorites
              </button>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default ProductList;
