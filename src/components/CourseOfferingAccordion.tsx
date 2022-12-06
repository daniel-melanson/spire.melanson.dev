import { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { CourseInstructors } from "../api";

interface CourseOfferingAccordionProps {
  courseId: string;
}

export default function CourseOfferingAccordion({ courseId }: CourseOfferingAccordionProps) {
  const [listings, setListings] = useState<CourseInstructors[]>([]);

  useEffect(() => {
    fetch(`https://spire-api.melanson.dev/courses/${courseId}/instructors`)
      .then(res => (res.ok ? res.json() : Promise.reject()))
      .then(setListings);
  }, []);

  return (
    <Accordion>
      {listings.map((listing, i) => (
        <Accordion.Item key={listing.offering.term.id} eventKey={String(i)}>
          <Accordion.Header>
            {listing.offering.term.id}
            {": "}
            {listing.instructors
              .map(i => i.name)
              .filter(x => x !== "Staff")
              .join(", ") || "Staff"}
          </Accordion.Header>
          <Accordion.Body>
            Nisi id anim id aliqua exercitation aliquip occaecat ut. Consectetur duis amet laborum mollit adipisicing
            deserunt dolor adipisicing. Sit irure dolore eu commodo ad cupidatat aliqua aute ex adipisicing ad quis.
            Aute esse nisi ipsum officia fugiat quis irure occaecat nulla amet veniam non incididunt. Consequat quis sit
            commodo est esse sint officia. Reprehenderit dolor laborum exercitation in.
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
