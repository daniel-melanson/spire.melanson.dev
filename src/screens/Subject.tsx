import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ISubject, api } from "../util/api";

export default function Subject() {
  const [subject, setSubject] = useState<ISubject | undefined>(undefined);
  const { id } = useParams();
  useEffect(() => {
    api(`/subjects/${id}`).then(setSubject);
  });

  return subject ? (
    <div>
      <h1>{subject.title}</h1>
      <h2>Groups:</h2>
      {subject.groups.map((group, id) => (
        <p key={id}>
          <Link to={`/academic-groups/${group.id}`}>{group.title}</Link>
        </p>
      ))}
      <h2>Courses:</h2>
    </div>
  ) : (
    <div>Loading...</div>
  );
}
