import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home.jsx";
import { About } from "./components/About.jsx";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
