import { Card, Container } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { Subject as APISubject } from "../api";
import { convertToSlug } from "../util/string";

export default function Subject() {
  const subject = useLoaderData() as APISubject;

  return (
    <Container>
      <h1>{subject.title}</h1>
      <h2>Groups:</h2>
      {subject.groups.map(group => (
        <p key={group.id}>
          <Link to={`/academic-groups/${group.id}/${convertToSlug(group.title)}`}>{group.title}</Link>
        </p>
      ))}
      <h2>Courses:</h2>
      <div className="d-flex align-content-start flex-wrap p-2">
        {subject.courses.map(course => (
          <Card className="m-1" key={course.id}>
            <Card.Body>
              <Card.Title>{course.id}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{course.title}</Card.Subtitle>
              <Link to={`/courses/${course.id}`}>More Info</Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
}
