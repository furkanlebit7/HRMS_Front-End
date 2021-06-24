import React from "react";
import { Route } from "react-router";
import JobAdvertisement from "../pages/JobAdvertisements";
import CompaniesPage from "../pages/CompaniesPage";
import SalariesPage from "../pages/SalariesPage";
import IntervievsPage from "../pages/IntervievsPage";
import Navibar from "./Navbar/Navibar";
import Navbar2 from "./Navbar/Navbar2";
import Footer from "./Footer.js";
import MainPage from "../pages/MainPage";

export default function Routers() {
  return (
    <div>
      <Navibar />
      <Navbar2 />
      <div className="container-xxl">
        <Route exact path="/" component={MainPage} />
        <Route path="/jobs" component={JobAdvertisement} />
        <Route path="/companies" component={CompaniesPage} />
        <Route path="/salaries" component={SalariesPage} />
        <Route path="/intervievs" component={IntervievsPage} />
      </div>
      <Footer />
    </div>
  );
}
