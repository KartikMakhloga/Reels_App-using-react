import { useEffect } from "react";
import { firestore } from "./firebase";

function App() {
  useEffect(() => {
    let f = async () => {
      let querySnapshot = await firestore.collection("posts").limit(3).orderBy("index","asc").get();
      querySnapshot.forEach((doc)=>{
        console.log(doc.data());
      })
    };
    f();
  }, []);

  return <h1>hello</h1>;
}

export default App;
