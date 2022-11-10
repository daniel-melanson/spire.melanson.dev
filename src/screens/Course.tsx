import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api, ICourse } from "../util/api";

export default function Course() {
  const [course, setCourse] = useState<ICourse | undefined>(undefined);
  const { id } = useParams();
  useEffect(() => {
    api(`/courses/${id}`).then(setCourse);
  });

  return course ? <div>{JSON.stringify(course)}</div> : <div>Loading...</div>;
}
