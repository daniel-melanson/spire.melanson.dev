/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import About from "./routes/About";
import AcademicGroup from "./routes/AcademicGroup";
import AcademicGroups from "./routes/AcademicGroups";
import Course from "./routes/Course";
import Courses from "./routes/Courses";
import Home from "./routes/Home";
import SearchResults from "./routes/SearchResults";
import Subject from "./routes/Subject";
import Subjects from "./routes/Subjects";
import "./styles.scss";

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="academic-groups">
      <Route index element={<AcademicGroups />} />
      <Route path=":id/:title" element={<AcademicGroup />} />
      <Route path="search" element={<SearchResults />} />
    </Route>
    <Route path="subjects">
      <Route index element={<Subjects />} />
      <Route path=":id" element={<Subject />} />
      <Route path="search" element={<SearchResults />} />
    </Route>
    <Route path="courses">
      <Route index element={<Courses />} />
      <Route path=":id" element={<Course />} />
      <Route path="search" element={<SearchResults />} />
    </Route>
    {/* <Route path="sections" element={<Sections />}>
      <Route path=":id" element={<Section />} />
      <Route path="search" element={<SearchResults />} />
    </Route> */}
  </Route>
);

const index = routes[0];
if (index.children) {
  for (const subRoute of index.children) {
    if (
      !subRoute.path ||
      !["academic-groups", "subjects", "courses", "sections", "instructors"].includes(subRoute.path)
    )
      continue;

    if (["academic-groups"].includes(subRoute.path)) {
      const indexRoute = subRoute.children![0];
      indexRoute.loader = () => fetch(`https://spire-api.melanson.dev/${subRoute.path}/`);
    }

    const idRoute = subRoute.children![1];
    idRoute.loader = ({ params }) => fetch(`https://spire-api.melanson.dev/${subRoute.path}/${params.id}`);
  }
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={createBrowserRouter(routes)} />
  </React.StrictMode>
);
