import { useContext } from "react";
import { AuthentificationContext } from "./AuthentificationProvider";
import { Navigate } from "react-router-dom";

const Authentication = ({ children }) => {
  const { isLoggedIn } = useContext(AuthentificationContext);

  if (!isLoggedIn.name) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default Authentication;
