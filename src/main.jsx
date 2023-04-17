import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  /* To enable React Router to work with all 
  components in a project, the Browser Router 
  component should be used to wrap the entire 
  application. This ensures that all parts of 
  the app can use React Router's routes and 
  navigation features. */
  <BrowserRouter>
    <React.StrictMode>
      {/* In order to maintain a clean and 
      organized code base, the App component 
      is imported to serve as the main entry 
      point for rendering all pages in the project. 
      The App component typically contains the 
      top-level routing and layout components, 
      as well as any shared components that need 
      to be used across multiple pages. */}
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
