import "./App.css";
import Navibar from "./layouts/Navbar/Navibar";
import Navbar2 from "./layouts/Navbar/Navbar2";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <Navibar />
      <Navbar2 />
      <Container>
        <MainPage />
      </Container>
    </div>
  );
}

export default App;
