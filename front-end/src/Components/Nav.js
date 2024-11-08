import React from "react";
import { json, Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const logout = () => {
    localStorage.clear();
    navigate("/singup");
  };
  return (
    <div>
      <img 
      alt="logo"
      className="logo"
      src="https://png.pngtree.com/png-clipart/20200709/original/pngtree-initial-letter-sa-logo-design-png-image_3580034.jpg"/>
      {auth ? (
        <ul className="nav-ul">
          <li>
            <Link to="/">Products</Link>{" "}
          </li>
          <li>
            <Link to="/add">Add Product</Link>{" "}
          </li>
          <li>
            <Link to="/update">Update Product</Link>{" "}
          </li>
          <li>
            <Link to="/profile">Profile</Link>{" "}
          </li>
          <li>
            <Link onClick={logout} to="/singup">
              Logout ({JSON.parse(auth).name})
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          <li>
            <Link to={"/singup"}>Sing Up</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Nav;
