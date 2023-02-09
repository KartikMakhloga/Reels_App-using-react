import { useEffect } from "react";
import { firestore } from "./firebase";

function App() {
  useEffect(() => {
    let f = async () => {
      let querySnapshot = await firestore.collection("posts").get();
      querySnapshot.forEach((doc)=>{
        console.log(doc.id);
      })
    };
  }, []);

  return <h1>hello</h1>;
}

export default App;``
