import { useState } from "react";

import "./App.css";
import About from "./components/About";
import Clients from "./components/Clients";
import Download from "./components/Download";
import Faps from "./components/Faps";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Subscribe from "./components/Subscribe";
import Testimonial from "./components/Testimonial";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Clients />
      <Testimonial />
      <Faps />
      <Download />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
