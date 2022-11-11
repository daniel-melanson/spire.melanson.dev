import { Link, useParams } from "react-router-dom";
import { useObject } from "../api";
import { convertToSlug } from "../util/string";

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
          <Link to={`/academic-groups/${group.id}/${convertToSlug(group.title)}`}>{group.title}</Link>
        </p>
      ))}
      <h2>Courses:</h2>
      {subject.courses.map(course => (
        <p key={course.id}>
          <Link to={`/courses/${course.id}`}>
            {course.id}: {course.title}
          </Link>
        </p>
      ))}
    </div>
  ) : (
    <div>Loading...</div>
  );
}
