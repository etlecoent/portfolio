import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NavBar from "./containers/NavBar.jsx";

function App() {
  return (
    <>
    <NavBar />
    <Router>
      <Switch>
        <Route />
      </Switch>
    </Router>
    </>
  );
}

export default App;
