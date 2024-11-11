import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import FrontEnd from "./pages/FrontEnd";
import BackEnd from "./pages/BackEnd";

export default function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/frontend" element={<FrontEnd />} />
        <Route path="/backend" element={<BackEnd />} />
      </Routes>
      <Footer />
    </Router>
  );
}
