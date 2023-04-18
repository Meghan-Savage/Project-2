import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductDetails = (props) => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:3000/admin/get-product/${props.id}`
        );
        setSelectedProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [props.id]);

  return (
    <>
      {selectedProduct && (
        <section>
          <div key={selectedProduct.id} className="m-4 w-60">
            <div className="h-60">
              <img
                src={selectedProduct.productImgUrl}
                alt={selectedProduct.productName}
              />
            </div>
            <div>
              <h1> {selectedProduct.productName} </h1>
              <p>{selectedProduct.productDescription}</p>
              <p>${selectedProduct.productPrice}</p>
            </div>
            <div>
              <form
                action="http://localhost:3000/admin/delete-product"
                method="POST"
              >
                <input type="hidden" value={props.id} name="productId" />
                <button
                  type="submit"
                  className="w-64 m-6 text-white bg-lime-500 hover:bg-lime-600 block"
                >
                  delete
                </button>
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProductDetails;
