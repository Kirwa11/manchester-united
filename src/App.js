import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Fixtures from "./pages/Fixtures";
import News from "./pages/News";
import Contact from "./pages/Contact";

// Styles
import "./App.css";

function App() {
  return (
      <Router>
        <div className="App">
          <Navbar />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/fixtures" element={<Fixtures />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
  );
}

export default App;