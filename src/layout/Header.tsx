import { Container, Form, FormControl, Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar expand="lg" bg="primary" variant="dark">
      <Container fluid className="justify-content-center">
        <Form className="col-4">
          <FormControl type="search" placeholder="Search" />
        </Form>
      </Container>
    </Navbar>
  );
}
