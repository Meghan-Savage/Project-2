import React from "react";

const BlockInput = (props) => {
  return (
    <input
      className="w-64 m-6 block"
      {...props}
      // type={props.type}
      // placeholder={props.placeholder}
    />
  );
};

export default BlockInput;
