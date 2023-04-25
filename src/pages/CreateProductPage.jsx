import React, { Fragment } from "react";
import AddProductForm from "../components/AddProductForm";
import Banner from "../components/Banner";

const CreateProductPage = () => {
  return (
    <Fragment>
      <div className="w-full h-36 overflow-hidden">
        <Banner />
      </div>
      <h1 className="bg-green-900 text-white">CREATE A PRODUCT</h1>
      <div className="flex justify-center">
        <AddProductForm />
      </div>
    </Fragment>
  );
};

export default CreateProductPage;
