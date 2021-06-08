import "./App.css";
import Navibar from "./layouts/Navbar/Navibar";
import JobAdvertisements from "./pages/JobAdvertisements";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navibar />
      <Container>
        <JobAdvertisements />
      </Container>
    </div>
  );
}

export default App;
