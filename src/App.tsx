import "./App.css";
import Navbar from "./components/WindowsPan";
import AppleNav from "./components/ApplePan";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/AppleB" element={<AppleNav />} />
      </Routes>
    </Router>
  );
}

export default App;