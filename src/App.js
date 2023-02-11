import { useEffect, useState } from "react";
import { firestore } from "./firebase";
import Login from "./Login";
import Home from "./Home";

function App() {
  let [user, setUser] = useState(null);

  return <div>{user ? <Home user = {user}/> : <Login handleUser = {setUser}/>}</div>;
}

export default App;
