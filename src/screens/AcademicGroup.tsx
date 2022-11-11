import { Link, useParams } from "react-router-dom";
import { useObject } from "../api";

export default function AcademicGroup() {
  const { id } = useParams();
  if (!id) return <div />;

  const group = useObject("academic-groups", id);
  return group ? (
    <div>
      <h1>{group.title}</h1>
      <h2>Subjects:</h2>
      {group.subjects.map(subject => (
        <p key={subject.id}>
          <Link to={`/subjects/${subject.id}`}>{subject.id}</Link>
        </p>
      ))}
    </div>
  ) : (
    <div>Loading...</div>
  );
}
