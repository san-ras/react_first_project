import "bootstrap/dist/css/bootstrap.min.css";
import { AuthentificationContext } from "./AuthentificationProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const { isLoggedIn, toggleIsLoggedIn } = useContext(AuthentificationContext);

  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link active fs-4 ms-5" to="/">
            Home
          </Link>
          <Link className="nav-item nav-link fs-4" to="/products">
            Products
          </Link>
          <Link className="nav-item nav-link fs-4" to="/delivery">
            Delivery
          </Link>
          <Link className="nav-item nav-link fs-4" to="/terms">
            Terms
          </Link>
          <Link className="nav-item nav-link fs-4" to="/contacts">
            Contacts
          </Link>
        </div>
      </div>

      {/* <div>
        <p>{isLoggedIn ? "You are logged in" : "You are not logged in"}</p>
        <Button
          onClick={toggleIsLoggedIn}
          className={isLoggedIn ? "btn btn-success" : "btn btn-info"}>
          {isLoggedIn ? "Log out" : "Log in"}
        </Button>
      </div> */}

      <div>
        <span className="me-5">
          {isLoggedIn.name ? (
            <>
              <span className="me-3">Welcome, {isLoggedIn.name}</span>
              <Link to="/profile" className="btn btn-success">
                Profile
              </Link>
            </>
          ) : (
            <>
              <span className="me-3">You are not logged in</span>
              <Link to="/login" className="btn btn-info">
                Log in
              </Link>
            </>
          )}{" "}
        </span>
      </div>
    </nav>
  );
};
