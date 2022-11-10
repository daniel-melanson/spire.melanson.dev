import React from "react";
import * as Router from "react-router-dom";
import About from "./screens/About";
import Home from "./screens/Home";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import AcademicGroups from "./screens/AcademicGroups";
import AcademicGroup from "./screens/AcademicGroup";
import Subject from "./screens/Subject";
import Course from "./screens/Course";

function App() {
  return (
    <div className="App">
      <Header />
      <Router.Routes>
        <Router.Route path="/" element={<Home />} />
        <Router.Route path="about" element={<About />} />
        <Router.Route path="academic-groups" element={<AcademicGroups />} />
        <Router.Route path="academic-groups/:id/:title" element={<AcademicGroup />} />
        <Router.Route path="subjects/:id/" element={<Subject />} />
        <Router.Route path="courses/:id/" element={<Course />} />
      </Router.Routes>
      <Footer />
    </div>
  );
}

export default App;
