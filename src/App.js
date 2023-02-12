import { useState, createContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

let userContext = createContext();

function App() {
  let [user, setUser] = useState(null);

  return (
    <>
      <Router>
        <userContext.Provider value={user}>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/">
              <Login handleUser={setUser} />
            </Route>
          </Switch>
        </userContext.Provider>
      </Router>
    </>
  );

  // return <div>{user ? <Home user = {user}/> : <Login handleUser = {setUser}/>}</div>;
}

export {userContext};
export default App;
