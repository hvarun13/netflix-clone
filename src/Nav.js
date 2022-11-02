import React, { useEffect, useState } from "react";
import "./Nav.css";
import logo from "./assets/logo.png";
import avatar from "./assets/avatar.png";

const Nav = () => {
  const [show, setShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <div className="nav-content">
        <img src={logo} alt="" className="nav-logo" />
        <img src={avatar} alt="" className="nav-avatar" />
      </div>
    </div>
  );
};

export default Nav;
