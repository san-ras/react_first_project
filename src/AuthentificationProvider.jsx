import { createContext, useState } from "react";

export const AuthentificationContext = createContext();

export const AuthentificationProvider = ({ children }) => {
  //   const [isLoggedIn, setIsLoggedIn] = useState(false);

  //   const toggleIsLoggedIn = () => {
  //     setIsLoggedIn(!isLoggedIn);
  //   };

  const [isLoggedIn, setIsLoggedIn] = useState({
    name: "",
    address: "",
    phoneNo: "",
    orders: "",
  });

  const toggleIsLoggedIn = (user) => {
    setIsLoggedIn(user ? user : {});
  };

  return (
    <AuthentificationContext.Provider value={{ isLoggedIn, toggleIsLoggedIn }}>
      {children}
    </AuthentificationContext.Provider>
  );
};
