import "./App.css";
import Navbar from "./components/WindowsPanel";
import AppleNav from "./components/MacPanel";
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