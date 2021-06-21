import "./App.css";
import Navibar from "./layouts/Navbar/Navibar";
import Navbar2 from "./layouts/Navbar/Navbar2";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./pages/MainPage";
import { Route } from "react-router";
import JobAdvertisement from "./pages/JobAdvertisements";
import CompaniesPage from "./pages/CompaniesPage";
import SalariesPage from "./pages/SalariesPage";
import IntervievsPage from "./pages/IntervievsPage";
import Footer from "./layouts/Footer.js";

function App() {
  return (
    <div className="App">
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

export default App;
