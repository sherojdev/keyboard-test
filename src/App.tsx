import "./App.css";
import Navbar from "./components/Navbar";
<<<<<<< HEAD
=======
import AppleNav from "./components/AppleNav";
>>>>>>> keyboard-layout-for-macOS-working
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
<<<<<<< HEAD
=======
        <Route path="/AppleB" element={<AppleNav />} />
>>>>>>> keyboard-layout-for-macOS-working
      </Routes>
    </Router>
  );
}

export default App;