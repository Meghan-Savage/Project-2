import React from "react";
import CustomLink from "../util/CustomLink";

const NavBar = () => {
  return (
    <div className="flex bg-green-900 h-12 items-center justify-between">
      {/* to prop needs to match the endpoint defined in App.js Routes */}
      <div>
        <CustomLink to="/">HOME</CustomLink>
        <CustomLink to="/products">PRODUCTS</CustomLink>
        <CustomLink to="/create-product">CREATE PRODUCT</CustomLink>
        <CustomLink to="/locations">MAP</CustomLink>
        <CustomLink to="/stores">STORES</CustomLink>
        
      </div>
      <div>
        <CustomLink to="/login">LOGIN</CustomLink>
      </div>
    </div>
  );
};

export default NavBar;
