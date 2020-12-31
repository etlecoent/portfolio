import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { useDarkMode } from "./hooks/useDarkMode";

import NavBar from "./containers/NavBar";
import Projects from "./containers/Projects";
import Page404 from "./containers/Page404";
import Footer from "./containers/Footer";


function App() {
  
  const [darkMode, setDarkMode] = useDarkMode();
  
  return (
    <>
    <Router basename="/portfolio">
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Switch>
        {/* <Route path="/">
          <Home />
        </Route> */}
        <Route path="/projects">
          <Projects />
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
