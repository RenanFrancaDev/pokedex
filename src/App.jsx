import  Home  from "./views/Home"
import { useState } from "react";


function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="App">
    <Home/>
    </div>
  );
}

export default App;