import "bootstrap/dist/css/bootstrap.min.css";
import { AuthentificationContext } from "../AuthentificationProvider";
import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  // const { isLoggedIn, toggleIsLoggedIn } = useContext(AuthentificationContext);
  const { isLoggedIn, login } = useContext(AuthentificationContext);
  const navigate = useNavigate();
  const [loginUser, setLoginUser] = useState();

  const handleLogin = () => {
    const user = {
      name: "Sandra",
      address: "Happy str. 7, City, Country",
      phoneNo: "+370 677 77777",
      orders: "3",
    };
    //    toggleIsLoggedIn(user);
    // navigate("/profile");
    login(loginUser);
  };

  const handleInput = (e) => {
    setLoginUser(e.target.value);
  };

  return (
    <div>
      <h1>Login page</h1>
      <p></p>
      <label>Name:</label> <span> </span>
      <input onChange={handleInput} type="text" required />
      <p></p>
      <Button onClick={handleLogin} className="btn btn-info">
        Log in
      </Button>
    </div>
  );
};
