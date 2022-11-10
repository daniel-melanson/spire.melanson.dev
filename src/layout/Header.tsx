import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function HeaderLink(props: { to: string; text: string }) {
  return (
    <LinkContainer to={props.to}>
      <Nav.Link className="text-light">{props.text}</Nav.Link>
    </LinkContainer>
  );
}

export default function Header() {
  return (
    <Nav defaultActiveKey="/" as="ul" style={{ backgroundColor: "#881c1c" }}>
      <Nav.Item as="li">
        <HeaderLink to={"/"} text={"Home"} />
      </Nav.Item>
      <Nav.Item as="li">
        <HeaderLink to={"/about"} text={"About"} />
      </Nav.Item>
    </Nav>
  );
}
