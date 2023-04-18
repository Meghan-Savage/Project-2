import React from "react";
import { useNavigate } from "react-router-dom";
import LoginInForm from "../components/LoginInForm";
import Banner from "../components/Banner";

const LoginPage = () => {
  const navigate = useNavigate();

  function navigateCreateAccount() {
    navigate("/create-account");
  }

  return (
    <>
      <div className="w-full h-36 overflow-hidden">
        <Banner />
      </div>
      <h1 className="bg-lime-500 text-white">CHECK IT OUT</h1>
      <div className="flex justify-center">
        <LoginInForm />
      </div>
      <div className="flex justify-center">
        <img src="/image 1.png" alt="shopping cart" />
      </div>
      <button
        onClick={() => {
          return navigateCreateAccount();
        }}
      >
        don't have an account click here
      </button>
    </>
  );
};

export default LoginPage;
