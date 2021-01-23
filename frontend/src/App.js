import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import ReactGA from 'react-ga';

import useDarkMode from "./hooks/useDarkMode";

import NavBar from "./containers/NavBar";
import Home from "./containers/Home";
import Projects from "./containers/Projects";
import Reach from "./containers/Reach";
import Page404 from "./containers/Page404";
import Footer from "./containers/Footer";


function App() {
  
  const [darkMode, setDarkMode] = useDarkMode();

  useEffect(() => {
    ReactGA.initialize('G-2GG3ZMK1KL');
    ReactGA.pageview(window.location.pathname); // Record a pageview for the given page
  }, []);
  
  return (
    <>
    <Router basename="/portfolio">
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/reachout">
          <Reach />
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
        
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
