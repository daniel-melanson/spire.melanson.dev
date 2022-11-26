import { Card, Container } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { AcademicGroup as APIAcademicGroup } from "../api";

export default function AcademicGroup() {
  const group = useLoaderData() as APIAcademicGroup;

  return (
    <Container>
      <h1>{group.title}</h1>
      <h2>Subjects:</h2>
      <div className="d-flex align-content-start flex-wrap p-2">
        {group.subjects.map(subject => (
          <Card className="m-1" key={subject.id}>
            <Card.Body>
              <Card.Title>{subject.id}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{subject.title}</Card.Subtitle>
              <Link to={`/courses/${subject.id}`}>More Info</Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
}
