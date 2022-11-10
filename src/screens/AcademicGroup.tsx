import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api, IAcademicGroup } from "../util/api";

export default function AcademicGroup() {
  const params = useParams();

  const [group, setGroup] = useState<IAcademicGroup | undefined>(undefined);

  useEffect(() => {
    api("/academic-groups/" + params.id).then(json => setGroup(json));
  });

  return group ? (
    <div>
      <h1>{group.title}</h1>
      <h2>Subjects:</h2>
      {group.subjects.map((subject, id) => (
        <p key={id}>
          <Link to={`/subjects/${subject.id}`}>{subject.title}</Link>
        </p>
      ))}
    </div>
  ) : (
    <div>Loading...</div>
  );
}
