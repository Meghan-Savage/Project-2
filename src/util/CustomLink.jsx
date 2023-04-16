import { Link, useMatch, useResolvedPath } from "react-router-dom";

import React from "react";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <span>
      <Link className="text-white m-5" to={to} {...props}>
        {children}
      </Link>
    </span>
  );
};

export default CustomLink;
