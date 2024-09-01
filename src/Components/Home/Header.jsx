// src/Components/Home/Header.jsx

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.component.css";
import "bootstrap/dist/css/bootstrap.min.css";
import camera from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { auth } from "../firebase"; // Import Firebase auth
import { onAuthStateChanged, signOut } from "firebase/auth"; // Import necessary Firebase methods

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to manage authentication
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.carts || []);
  const cartLength = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const navscroll = () => {
    const scrolling = window.scrollY;
    setScroll(scrolling > 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", navscroll);
    return () => {
      window.removeEventListener("scroll", navscroll);
    };
  }, []);

  useEffect(() => {
    // Check Firebase auth state change
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user); // Set authentication state based on user object
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth); // Log out the user
      navigate("/"); // Redirect to the homepage after logout
      console.log("User signed out.");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg main-header ${scroll ? "sticky-header" : ""}`}>
      <div className="container-fluid">
        <NavLink to="/">
          <img src={camera} alt="Logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            <NavLink className="m-3" to="/searchproduct">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </NavLink>

            <div className="position-relative" style={{ cursor: "pointer" }} onClick={() => navigate("/cart")}>
              <FontAwesomeIcon icon={faCartShopping} />
              {cartLength > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartLength}
                </span>
              )}
            </div>

            {/* Conditional Rendering for Auth Buttons */}
            {!isAuthenticated ? (
              <>
                <button className="btn btn-outline-primary ms-4 " onClick={() => navigate("/login")}>
                  Login
                </button>
                <button className="btn btn-primary ms-3" onClick={() => navigate("/signup")}>
                  Signup
                </button>
              </>
            ) : (
              <button className="btn btn-outline-danger ms-3" onClick={handleLogout}>
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
