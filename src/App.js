import { useEffect } from "react";
import { firestore } from "./firebase";
import Login from "./Login";
import Home from "./Home";

function App() {

  return (
     <div>
      <Login />
     </div>
  );
}

export default App;
