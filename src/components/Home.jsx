import React from "react";
import "../Style/header.css";

function Home() {
  return (
    <>
    <div className="hero">
      <nav className="navbar">
        <div className="logo">
          Unwind <span>HOTEL BOOKING</span>
        </div>
        <div className="links">
          <ul className="nav-links ">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="footer">About</a>
            </li>
            <li>
              <a href="footer">Contact</a>
            </li>
            <li>
              <a href="login_register">Login</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    </>
  );
}

export default Home;
