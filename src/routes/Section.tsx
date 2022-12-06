import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { Section as APISection } from "../api";

export default function Section() {
  const section = useLoaderData() as APISection;
  return (
    <Container>
      <h1>{section.id}</h1>
    </Container>
  );
}
