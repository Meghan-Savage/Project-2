import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const ProductList = () => {
  const [productListData, setProductListData] = useState([]);
  const [personalProductListData, setPersonalProductListData] = useState([]);
  const navigate = useNavigate();

  /* This useEffect hook fetches data from a server and 
  sets it in the state variable called productListData. 
  It runs once, immediately after the component mounts, 
  due to the empty array as a second argument */
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3000/products");

        const apiGrocery = await axios.get(
          "https://grocerytracker.ca/api/pc/search/1576/Grocery"
        );
        const apiDairy = await axios.get(
          "https://grocerytracker.ca/api/pc/search/1576/Dairy"
        );
        const apiDeli = await axios.get(
          "https://grocerytracker.ca/api/pc/search/1576/Deli"
        );
        const apiMeat = await axios.get(
          "https://grocerytracker.ca/api/pc/search/1576/Meat"
        );
        const apiFrozen = await axios.get(
          "https://grocerytracker.ca/api/pc/search/1576/Frozen"
        );
        const apiProduce = await axios.get(
          "https://grocerytracker.ca/api/pc/search/1576/Produces"
        );

        const responseData = apiGrocery.data.results.concat(
          apiDairy.data.results,
          apiDeli.data.results,
          apiMeat.data.results,
          apiFrozen.data.results,
          apiProduce.data.results
        );

        const uniqueItems = [];

        responseData.forEach((item) => {
          if (
            !uniqueItems.some(
              (uniqueItem) => uniqueItem.articleNumber === item.articleNumber
            )
          ) {
            uniqueItems.push(item);
          }
        });

        setPersonalProductListData(response.data);
        setProductListData(uniqueItems);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  function selectedProduct(productId) {
    navigate("/productId/" + productId);
  }

  console.log(productListData);

  return (
    <div className="flex flex-row flex-wrap justify-center">
      {/*      Map function to iterate through each product
       in an array of productListData */}

      {personalProductListData.map((product) => {
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
                className="w-full m-2 text-white bg-green-900 hover:bg-lime-600 block"
                type="submit"
              >
                Add To Cart
              </button>
              <button
                className="w-full m-2 text-white bg-green-900 hover:bg-lime-600 block"
                type="submit"
              >
                Add To Favorites
              </button>
              <button
                className="w-full m-2 text-white bg-green-900 hover:bg-lime-600 block"
                type="button"
                onClick={() => {
                  return selectedProduct(product._id);
                }}
              >
                Edit
              </button>
            </div>
          </div>
        );
      })}

      {productListData.map((product) => {
        return (
          <div key={product.articleNumber} className="m-4 w-60">
            <div className="h-60">
              <img src={product.image} alt="product image" />
            </div>
            <div>
              <h1> {product.name} </h1>
              <p>{product.aisle}</p>
              <p>${product.prices.price}</p>
            </div>
            <div>
              <button
                className="w-full m-2 text-white bg-green-900 hover:bg-lime-600 block"
                type="submit"
              >
                Add To Cart
              </button>
              <button
                className="w-full m-2 text-white bg-green-900 hover:bg-lime-600 block"
                type="submit"
              >
                Add To Favorites
              </button>
              <button
                className="w-full m-2 text-white bg-green-900 hover:bg-lime-600 block"
                type="button"
                onClick={() => {
                  return selectedProduct(product._id);
                }}
              >
                Edit
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );

  // ***************************for mongo api***********************************************
  // return (
  //
  // );
};

export default ProductList;
