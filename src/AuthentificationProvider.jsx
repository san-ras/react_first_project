import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthentificationContext = createContext();

export const AuthentificationProvider = ({ children }) => {
  //   const [isLoggedIn, setIsLoggedIn] = useState(false);

  //   const toggleIsLoggedIn = () => {
  //     setIsLoggedIn(!isLoggedIn);
  //   };

  const loaction = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState({
    name: "",
    address: "",
    phoneNo: "",
    orders: "",
    permissions: [],
  });

  const navigate = useNavigate();

  // naudojau pradiniam variante:
  // const toggleIsLoggedIn = (user) => {
  //   setIsLoggedIn(user ? user : {});
  // };

  const login = (person) => {
    if (person === "admin") {
      setIsLoggedIn({ name: person, permissions: ["update_product"] });
    } else {
      setIsLoggedIn({ name: person, permissions: ["read_products"] });
    }
    navigate(location.state?.path || "/profile");
  };

  const logout = () => {
    setIsLoggedIn({ user: {}, permissions: [] });
    navigate("/");
  };

  //returne vietoj login logout irgi buvo toggleIsLoggedIn
  return (
    <AuthentificationContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthentificationContext.Provider>
  );
};
