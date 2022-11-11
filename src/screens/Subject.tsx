import { Link, useParams } from "react-router-dom";
import { useObject } from "../api";

function toSlug(s: string) {
  return s.toLowerCase().trim().replaceAll(" ", "-");
}

export default function Subject() {
  const { id } = useParams();
  if (!id) return <div />;

  const subject = useObject("subjects", id);
  return subject ? (
    <div>
      <h1>{subject.title}</h1>
      <h2>Groups:</h2>
      {subject.groups.map(group => (
        <p key={group.id}>
          <Link to={`/academic-groups/${group.id}/${toSlug(group.title)}`}>{group.title}</Link>
        </p>
      ))}
      <h2>Courses:</h2>
      {subject.courses.map(course => (
        <>
          <Link to={`/courses/${course.id}`}>{course.id}</Link>
          <br />
        </>
      ))}
    </div>
  ) : (
    <div>Loading...</div>
  );
}
