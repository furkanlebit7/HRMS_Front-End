import React from "react";
import "./SignNavBar.css";
import { Link } from "react-router-dom";

export default function SignNavBar({ text, link }) {
  return (
    <div>
      <nav className="navbar navbar-light bg-light justify-content-between container">
        <Link to="./" className="navbar-brand">
          <img src="logo.svg" width="130px" />
        </Link>
        <Link to={link}>
          <button
            className="signIn_button btn btn-outline-success my-2 my-sm-0"
            type="button"
          >
            {text}
          </button>
        </Link>
      </nav>
    </div>
  );
}
