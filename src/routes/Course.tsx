import { Link, useLoaderData } from "react-router-dom";
import { Course as APICourse } from "../api";

export default function Course() {
  const course = useLoaderData() as APICourse;

  return (
    <div>
      <h1>{course.title}</h1>
      <h2>
        <Link to={`/subjects/${course.subject.id}`}>{course.subject.title}</Link>
      </h2>
      <h2>Offerings:</h2>
      {course.offerings.map(offering => (
        <p key={offering.id}>{offering.term.id}</p>
      ))}
    </div>
  );
}
