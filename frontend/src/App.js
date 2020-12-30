import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import NavBar from "./containers/NavBar";
import Footer from "./containers/Footer";


function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Switch>
        {/* <Route exact path="/">
          <Home/>
        </Route> */}
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
