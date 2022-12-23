import { useState } from "react";

import "./App.css";
import About from "./components/About";
import Clients from "./components/Clients";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Clients />
    </div>
  );
}

export default App;
