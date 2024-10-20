import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductListComponent from "./ProductListComponent";
import { NavBar } from "./NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { Products } from "./pages/Products";
import { Home } from "./pages/Home";
import { Contacts } from "./pages/Contacts";
import { Delivery } from "./pages/Delivery";
import { Terms } from "./pages/Terms";
import { LoginPage } from "./pages/LoginPage";
import { Profile } from "./pages/Profile";
import { ProductDetails } from "./pages/ProductDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
