import { Route, Routes } from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";
import CreateProductPage from "./pages/CreateProductPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-product" element={<CreateProductPage />} />
      </Routes>
    </>
  );
}

export default App;
