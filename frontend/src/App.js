import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { useDarkMode } from "./hooks/useDarkMode";

import NavBar from "./containers/NavBar";
import Footer from "./containers/Footer";


function App() {
  
  const [darkMode, setDarkMode] = useDarkMode();
  
  return (
    <>
    <Router>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Switch>
        {/* <Route path="/">
          <Home />
        </Route> */}
        {/* <Route path="/">
          <Home />
        </Route> */}
        {/* <Route path="*">
          <404 />
        </Route> */}
        
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
