import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <div>
          <Sidebar />
        </div>

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
