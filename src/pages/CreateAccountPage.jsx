import React, { Fragment } from "react";
import CreateAccountForm from "../components/CreateAccountForm";
import Banner from "../components/Banner";

const CreateAccountPage = () => {
  return (
    <Fragment>
      <div className="w-full h-36 overflow-hidden">
        <Banner />
      </div>
      <h1 className="bg-green-900 text-white">CHECK IT OUT</h1>
      <div className="flex justify-center">
        <CreateAccountForm />
      </div>
      <div className="flex justify-center">
        <img className="animate-slide" src="/image 1.png" alt="shopping cart" />
      </div>
    </Fragment>
  );
};

export default CreateAccountPage;
