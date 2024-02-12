import React from "react";
import About from "./pages/AboutPage"
import Home from "./pages/HomePage";
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';




function App() {

  return (
    <Router>
      <div>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/about" element={<About/>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
