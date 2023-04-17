import React from "react";

/* This is a reusable component that provides a 
standardized input field throughout a project. It 
requires the essential properties of an input, such 
as type, name, or ID, to function properly.*/

const BlockInput = (props) => {
  return (
    <input
      className="w-64 m-6 block"
      {...props}
      /* ^ This should only be properties 
        of an html input ex: max, min, step etc...*/

      /*These are static properties that are no 
        longer needed with the spread of props */
      // type={props.type}
      // placeholder={props.placeholder}
    />
  );
};

export default BlockInput;
