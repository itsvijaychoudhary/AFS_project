import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/home.css";

export default function Home() {
  return (
    <>
      <div id="navbar">
        <div id="logo">
          <h1>Naukri.Com</h1>
        </div>

        <div id="links">
          {" "}
          <Link id="Link" to="/">
            Home
          </Link>
          <Link id="Link" to="/contact">
            Apply for job
          </Link>
          <Link id="Link" to="/about">
            About
          </Link>
          <Link id="Link" to="/login">
            Login/SignUp
          </Link>
        </div>
      </div>
      <h1>LOGIN/SIGNUP TO SEE POSTS</h1>
    </>
  );
}
