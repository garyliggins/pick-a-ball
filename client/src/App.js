import {Router} from "@reach/router";
// css
import "./styles/app.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
// componetns
import Home from "./components/Home";
import CreateComp from "./components/CreateComp";
import UpdateGame from "./components/UpdateGame";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <CreateComp path="/createGame" />
        <UpdateGame path="/updateGame" />
      </Router>
    </div>
  );
}

export default App;
