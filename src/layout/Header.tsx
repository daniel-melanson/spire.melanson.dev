import { useState } from "react";
import { Button, Container, Dropdown, DropdownButton, InputGroup, Nav, Navbar } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Form } from "react-router-dom";
import { convertToSlug } from "../util/string";

export default function Header() {
  const searchGroups = ["Academic Groups", "Subjects", "Courses", "Sections", "Instructors"];
  const [searchGroup, setSearchGroup] = useState<string>(searchGroups[0]);

  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Spire</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <Form className="d-flex" action={`${convertToSlug(searchGroup)}/search`}>
            <InputGroup>
              <DropdownButton variant="light" title={searchGroup} id="input-group-dropdown-2" align="start">
                {searchGroups.map(s => (
                  <Dropdown.Item key={s} onClick={() => setSearchGroup(s)}>
                    {s}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
              <input
                style={{
                  border: "0px",
                }}
                type="search"
                name="q"
                minLength={2}
                placeholder="Search"
              />
              <Button variant="light" type="submit">
                <Icon.Search />
              </Button>
            </InputGroup>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
