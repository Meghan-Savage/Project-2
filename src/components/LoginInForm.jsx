import React from "react";
import BlockInput from "../util/BlockInput";

const LoginInForm = () => {
  return (
    <form action="" method="POST">
      <p>access your account</p>
      <div>
        <BlockInput type="text" placeholder="USERNAME" name="username" />
        <BlockInput type="password" placeholder="PASSWORD" name="password" />
      </div>
      <div>
        <button>forgot your password?</button>
        <button
          className="w-64 m-6 text-white bg-green-900 hover:bg-lime-600 block"
          type="submit"
        >
          SIGN IN
        </button>
      </div>
    </form>
  );
};

export default LoginInForm;
