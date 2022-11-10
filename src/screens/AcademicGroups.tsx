import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api, IAcademicGroup, PaginatedResult } from "../util/api";

function toSlug(s: string) {
  return s.toLowerCase().trim().replaceAll(" ", "-");
}

export default function AcademicGroups() {
  const [groups, setGroups] = useState<Array<IAcademicGroup>>([]);

  useEffect(() => {
    api("/academic-groups/").then((json: PaginatedResult<IAcademicGroup>) => {
      json.results.sort((a, b) => a.title.localeCompare(b.title));
      setGroups(json.results);
    });
  });

  return (
    <div>
      {groups.map((group, id) => (
        <p key={id}>
          <Link to={`/academic-groups/${group.id}/${toSlug(group.title)}`}>{group.title}</Link>
        </p>
      ))}
    </div>
  );
}
