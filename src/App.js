import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Load from "./components/pages/LoadPage";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <Nav />
          <Route exact path="/react-portfolio" component={Load}></Route>
          <Route exact path="/react-portfolio/Home" component={Home}></Route>
          <Route exact path="/react-portfolio/projects" component={Projects}></Route>
          <Route exact path="/react-portfolio/contact" component={Contact}></Route>
      </div>
    </Router>
  );
}

export default App;
