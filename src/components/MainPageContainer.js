import React from "react";
import "./MainPageContainer.css";
import MainPageJobAlert from "./MainPageJobAlert";
import MainPageJobs from "./MainPageJobs.js";
import MainPageExploreSalaries from "./MainPageExploreSalaries.js";
import MainPageCompanies from "./MainPageCompanies.js";

export default function MainPageContainer() {
  return (
    <div className="main_page">
      <MainPageJobs />
      <MainPageJobAlert />
      <MainPageExploreSalaries />
      <MainPageCompanies />
    </div>
  );
}
