import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Welcome from "./portfolio/welcome";
import Home from "./portfolio/home";

const basename = '/PortfolioReact';
function App() {
  return (
    <div>
      <Router basename={basename}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;