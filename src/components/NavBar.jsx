import React from "react";
import CustomLink from "../util/CustomLink";

const NavBar = () => {
  return (
    <div className="flex bg-lime-500 h-12 items-center justify-start">
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/create-product">Create Product</CustomLink>
    </div>
  );
};

export default NavBar;
