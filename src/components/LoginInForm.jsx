import React from "react";
import BlockInput from "../util/BlockInput";

const LoginInForm = () => {
  return (
    <form action="" method="POST">
       <h1>CheckItOut</h1>
        <p>access your account</p>
      <div>
        <BlockInput type="text" placeholder="USERNAME" />
        <BlockInput type="password" placeholder="PASSWORD" />
      </div>
      <div>
        <button>forgot your password?</button>
        <button
          className="w-64 m-6 text-white bg-lime-500 hover:bg-lime-600 block"
          type="submit"
        >
          SIGN IN
        </button>
      </div>
    </form>
  );
};

export default LoginInForm;
