import { Link, useParams } from "react-router-dom";
import { useObject } from "../api";

export default function Course() {
  const { id } = useParams();
  if (!id) return <div />;

  const course = useObject("courses", id);
  return course ? (
    <div>
      <h1>{course.title}</h1>
      <h2>
        <Link to={`/subjects/${course.subject.id}`}>{course.subject.title}</Link>
      </h2>
      <h2>Offerings:</h2>
      {course.offerings.map(offering => (
        <p key={offering.id}>
          <Link to={`/course-offerings/${offering.id}`}>{offering.term.id}</Link>
        </p>
      ))}
    </div>
  ) : (
    <div>Loading...</div>
  );
}
