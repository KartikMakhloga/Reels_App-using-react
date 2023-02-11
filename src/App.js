import {  useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

function App() {
  let [user, setUser] = useState(null);

  return (
  <>
    <Router>
      <Switch>
        <Route path="/login">
          <Login handleUser={setUser} user = {user}/>
        </Route>
        <Route path="/home">
          <Home user={user} />
        </Route>
      </Switch>
    </Router>
  </>
  );


  // return <div>{user ? <Home user = {user}/> : <Login handleUser = {setUser}/>}</div>;
}

export default App;
