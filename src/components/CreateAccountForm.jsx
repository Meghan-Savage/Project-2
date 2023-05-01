import React from "react";
import BlockInput from "../util/BlockInput";

const CreateAccountForm = () => {
  return (
    <form action="http://localhost:3000/register" method="POST">
      <div>
        <BlockInput type="text" placeholder="USERNAME" name="username" />
        <BlockInput type="email" placeholder="EMAIL" name="email" />
        <BlockInput type="text" placeholder="NAME" name="name" />
        <BlockInput type="password" placeholder="PASSWORD" name="password" />
      </div>
      <div>
        <button
          className="w-64 m-6 text-white bg-green-900 hover:bg-lime-600 block"
          type="submit"
        >
          CREATE ACCOUNT
        </button>
      </div>
    </form>
  );
};

export default CreateAccountForm;
