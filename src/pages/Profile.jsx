import "bootstrap/dist/css/bootstrap.min.css";
import { AuthentificationContext } from "../AuthentificationProvider";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const { isLoggedIn, toggleIsLoggedIn } = useContext(AuthentificationContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    toggleIsLoggedIn({});
    navigate("/");
  };

  return (
    <div>
      {isLoggedIn && (
        <div>
          <h3>Your details</h3>
          <p>Name: {isLoggedIn.name}</p>
          <p>Address: {isLoggedIn.address}</p>
          <p>Phone no: {isLoggedIn.phoneNo}</p>
          <p>Previous orders: {isLoggedIn.orders}</p>
        </div>
      )}
      <Button onClick={handleLogout} className="btn btn-success">
        Log out
      </Button>
    </div>
  );
};
