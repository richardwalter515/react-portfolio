import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  HashRouter,
} from "react-router-dom";
import Nav from "./components/Nav";
import Load from "./components/pages/LoadPage";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Experience from "./components/pages/Experience";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <HashRouter>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Load />
          </Route>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/experience">
            <Experience />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
