import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./layouts/Dashboard";

function App() {
  return (
    <div className="App">
      <Route path="/signUp" component={SignUp} />
      <Route path="/signIn" component={SignIn} />
      <Route exact path="/" component={Dashboard} />
    </div>
  );
}

export default App;
