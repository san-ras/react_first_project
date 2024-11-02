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
import { AddProduct } from "./pages/AddProduct";
import Authentication from "./Authentication";
import PERMISSIONS from "./persmissions";
import { Authorization } from "./Authorization";

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
        <Route
          element={
            <Authorization permissions={[PERMISSIONS.CAN_READ_PRODUCTS]} />
          }
        >
          <Route path="/terms" element={<Terms />} />
        </Route>
        <Route
          path="/delivery"
          element={
            <Authentication>
              <Delivery />
            </Authentication>
          }
        />

        <Route
          element={
            <Authorization permissions={[PERMISSIONS.CAN_UPDATE_PRODUCTS]} />
          }
        >
          <Route path="/add" element={<AddProduct />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
