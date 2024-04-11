import React from "react";
import { Link } from "react-router-dom";
import AdoptMeLogo from "../assets/adopt_me_white.png";
import "../scss/layout/navbar/_navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarLogo">
        <Link to={"/"}>
          <img src={AdoptMeLogo} alt="adopt-me-logo" />
        </Link>
      </div>
      <div className="centerLinks">
        <Link to={"/"}>HOME</Link>
        {/* <Link to={"/adoption"}>Adoption</Link> */}
        <Link to={"/veterinary"}>VETERINARY</Link>
        <Link to={"/blog"}>BLOG</Link>
        <Link to={"/zoo-shop"}>ZOO SHOP</Link>
        {/* <Link to={"/your-pet"}>Your Pet</Link> */}
        <Link to={"/profile"}>PROFILE</Link>
      </div>
      <div className="rightLink">
        <Link to={"/adopt-now"}>Adopt Now</Link>
      </div>
    </div>
  );
};

export default Navbar;
