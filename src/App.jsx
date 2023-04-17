import { Route, Routes } from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";
import CreateProductPage from "./pages/CreateProductPage";
import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-product" element={<CreateProductPage />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </>
  );
}

export default App;
