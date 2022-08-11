import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api, IAcademicGroup } from "../util/api";

export default function AcademicGroup() {
  const params = useParams();

  const [group, setGroup] = useState<IAcademicGroup | undefined>(undefined);

  useEffect(() => {
    api("/academic-groups/" + params.id).then(json => setGroup(json));
  });

  return group ? <div>{JSON.stringify(group)}</div> : <div>Loading...</div>;
}
