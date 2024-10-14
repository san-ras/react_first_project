import "bootstrap/dist/css/bootstrap.min.css";
import { AuthentificationContext } from "../AuthentificationProvider";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const { isLoggedIn, toggleIsLoggedIn } = useContext(AuthentificationContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = {
      name: "Sandra",
      address: "Happy str. 7, City, Country",
      phoneNo: "+370 677 77777",
      orders: "3",
    };
    toggleIsLoggedIn(user);
    navigate("/profile");
  };

  return (
    <Button onClick={handleLogin} className="btn btn-info">
      Log in
    </Button>
  );
};
