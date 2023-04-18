import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import EditProductForm from "../components/EditProductForm";
import Banner from "../components/Banner";
import ProductDetails from "../components/ProductDetails";

const EditProductPage = (props) => {
  let params = useParams();

  return (
    <Fragment>
      <div className="w-full h-36 overflow-hidden">
        <Banner />
      </div>
      <div className="flex justify-center">
        <div>
          <ProductDetails id={params.id} />
        </div>
        <div className="flex justify-center m-10">
          <EditProductForm />
        </div>
      </div>
    </Fragment>
  );
};

export default EditProductPage;
