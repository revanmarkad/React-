import React from "react";
import Navbar from "./components/navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Portfolio } from "./components/Portfolio";
import { Skills } from "./components/Skills";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="main-page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
