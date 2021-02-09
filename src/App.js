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
          <Route exact path="/" component={Load} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
