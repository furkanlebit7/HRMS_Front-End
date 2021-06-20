import "./App.css";
import Navibar from "./layouts/Navbar/Navibar";
import Navbar2 from "./layouts/Navbar/Navbar2";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import MainPage from "./pages/MainPage";
import { Route } from "react-router";
import JobAdvertisement from "./pages/JobAdvertisements";
import CompaniesPage from "./pages/CompaniesPage";
import SalariesPage from "./pages/SalariesPage";
import IntervievsPage from "./pages/IntervievsPage";

function App() {
  return (
    <div className="App">
      <Navibar />
      <Navbar2 />
      <Container>
        <Route exact path="/" component={MainPage} />
        <Route path="/jobs" component={JobAdvertisement} />
        <Route path="/companies" component={CompaniesPage} />
        <Route path="/salaries" component={SalariesPage} />
        <Route path="/intervievs" component={IntervievsPage} />
      </Container>
    </div>
  );
}

export default App;
