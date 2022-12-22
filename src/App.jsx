import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Nav />
      <Header />
    </div>
  );
}

export default App;
