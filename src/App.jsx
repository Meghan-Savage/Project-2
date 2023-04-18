import { Route, Routes } from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";
import CreateProductPage from "./pages/CreateProductPage";
import ProductList from "./components/ProductList";
import EditProductPage from "./pages/EditProductPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      {/* Placing the NavBar component above the 
    Routes component in a React application's 
    component hierarchy allows the NavBar to be 
    rendered consistently across all pages, regardless 
    of the current URL path */}
      <NavBar />
      {/* The Routes component is used to define the 
      routes that should be matched with the current 
      URL path, and to render the corresponding components 
      for each route. In order for the routes to work 
      properly, they must be defined within the Routes 
      component */}
      <Routes>
        {/* Each route needs to have a path prop that 
        defines the endpoint of the URL path that should 
        be matched, and an element prop that specifies 
        the React component that should be rendered when 
        the path is matched */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-product" element={<CreateProductPage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/productId/:id" element={<EditProductPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
