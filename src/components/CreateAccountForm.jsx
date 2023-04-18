import React from "react";
import BlockInput from "../util/BlockInput";

const CreateAccountForm = () => {
  return (
    <form action="" method="POST">
      <p>create your account</p>
      <div>
        <BlockInput type="text" placeholder="USERNAME" name="username" />
        <BlockInput type="email" placeholder="EMAIL" name="email" />
        <BlockInput type="tel" placeholder="PHONE NUMBER" name="phoneNumber" />
        <BlockInput type="text" placeholder="STORE" name="store" />
        <BlockInput type="password" placeholder="PASSWORD" name="password" />
      </div>
      <div>
        <button
          className="w-64 m-6 text-white bg-lime-500 hover:bg-lime-600 block"
          type="submit"
        >
          CREATE ACCOUNT
        </button>
      </div>
    </form>
  );
};

export default CreateAccountForm;
