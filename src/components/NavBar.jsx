import React from "react";
import CustomLink from "../util/CustomLink";

const NavBar = () => {
  return (
    <div className="flex bg-lime-500 h-12 items-center justify-between">
      {/* to prop needs to match the endpoint defined in App.js Routes */}
      <div>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/products">Product List</CustomLink>
        <CustomLink to="/create-product">Create Product</CustomLink>
      </div>
      <div>
        <CustomLink to="/login">LOGIN</CustomLink>
      </div>
    </div>
  );
};

export default NavBar;
