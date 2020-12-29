import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import NavBar from "./containers/NavBar.jsx";

function App() {
  return (
    <>
    <NavBar />
    <Router>
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
    </Router>
    </>
  );
}

export default App;
