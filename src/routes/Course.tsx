import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { Course as APICourse } from "../api";
import CourseOfferingAccordion from "../components/CourseOfferingAccordion";

export default function Course() {
  const course = useLoaderData() as APICourse;
  return (
    <Container>
      <h1>
        {course.id}: {course.title}
      </h1>
      {course.offerings.length > 0 ? (
        <>
          <h2>Offerings:</h2>
          <CourseOfferingAccordion courseId={course.id} />
        </>
      ) : (
        <h2>No offerings since Spring 2018</h2>
      )}
    </Container>
  );
}
