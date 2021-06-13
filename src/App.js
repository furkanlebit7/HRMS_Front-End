import "./App.css";
import Navibar from "./layouts/Navbar/Navibar";
import JobAdvertisements from "./pages/JobAdvertisements";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import AdvertisementShare from "./pages/AdvertisementShare";

function App() {
  return (
    <div className="App">
      <Navibar />
      <Container>
        <AdvertisementShare />
      </Container>
    </div>
  );
}

export default App;
