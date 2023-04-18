import React from "react";
import LoginInForm from "../components/LoginInForm";
import Banner from "../components/Banner";

const LoginPage = () => {
  return (
    <>
      <div className="w-full h-36 overflow-hidden">
        <Banner />
      </div>
      <div className="flex justify-center">
        <LoginInForm />
      </div>
      <div className="flex justify-center">
        <img src="/image 1.png" alt="shopping cart" />
      </div>
      <button>don't have an account click here</button>
    </>
  );
};

export default LoginPage;
