import React from "react";
import * as Router from "react-router-dom";
import About from "./screens/About";
import Home from "./screens/Home";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Router.Routes>
        <Router.Route path="/" element={<Home />} />
        <Router.Route path="about" element={<About />} />
      </Router.Routes>
      <Footer />
    </div>
  );
}

export default App;
