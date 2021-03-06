import React from 'react';
import Navbar from "./components/Navbar";
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Members from './components/pages/Members';




function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/react-agenda/" element={<Home />} />
        <Route path="/react-agenda/members" element={<Members />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
