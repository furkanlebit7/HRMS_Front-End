import "./App.css";
import Navibar from "./layouts/Navbar/Navibar";
import Navbar2 from "./layouts/Navbar/Navbar2";
import JobAdvertisements from "./pages/JobAdvertisements";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import AdvertisementShare from "./pages/AdvertisementShare";

function App() {
  return (
    <div className="App">
      <Navibar />
      <Navbar2 />
      <Container>
        <AdvertisementShare />
      </Container>
    </div>
  );
}

export default App;
