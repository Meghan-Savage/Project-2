import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React from "react";

/* The CustomLink component is defined as a 
functional component that takes three props

children: the content to be displayed inside the custom link
to: the URL path that the custom link should navigate to
...props: any additional props to be passed to the underlying Link component 
*/
const CustomLink = ({ children, to, ...props }) => {
  /* useResolvedPath hook is used to resolve the provided 
  to path to an absolute path, and the useMatch hook is used 
  to check if the resolved path matches the current URL path 
  exactly. This will be used for setting the colour of the 
  active link in the nav bar */
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  // Currently unused^
  return (
    /*  Link is a component in the React JavaScript library 
    that creates hyperlinks that can navigate to different 
    URLs within a web application. */
    <Link className="text-white m-5" to={to} {...props}>
      {children}
    </Link>
  );
};

export default CustomLink;
