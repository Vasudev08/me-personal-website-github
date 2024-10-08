import "./App.css"; // Ensure your Tailwind CSS is imported
import Home from "./components/Home";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Layout from "./Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <div className="flex-1 p-4 overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </Layout>
    </Router>
  );
}

export default App;
