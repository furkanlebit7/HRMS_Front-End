import React from "react";
import { Container } from "react-bootstrap";
import "./navbar.css";

export default function Navibar() {
  return (
    <>
      <div className="navbar navbar-light bg-light ">
        <Container className="d-flex">
          <img src="logo.svg" height="25px" />
          <ul className="menu_flex menu_items">
            <a href="#">İş Ara</a>
            <a href="#">Pozisyon Rehberi</a>
            <a href="#">Kariyer Rehberi</a>
          </ul>
          <ul className="menu_buttons menu_flex">
            <div className="theme_wrapper">
              <label>
                <input type="checkbox" />
                <span className="ball" />
              </label>
            </div>
            <button className="button">Login</button>
          </ul>
        </Container>
      </div>
    </>
  );
}
