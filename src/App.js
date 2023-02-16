import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import AuthProvider from "./AuthProvider";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/">
              <Login  />
            </Route>
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );

  // return <div>{user ? <Home user = {user}/> : <Login handleUser = {setUser}/>}</div>;
}

export default App;
