import {Router} from "@reach/router";
// css
import "./styles/app.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
// componetns
import Home from "./components/Home";
import FindGameComp from "./components/FindGameComp";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <FindGameComp path="/findGame" />
      </Router>
    </div>
  );
}

export default App;
