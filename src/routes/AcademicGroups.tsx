import { Link, useLoaderData } from "react-router-dom";
import { AcademicGroup, PaginatedResult } from "../api";
import { convertToSlug } from "../util/string";

export default function AcademicGroups() {
  const page = useLoaderData() as PaginatedResult<AcademicGroup>;

  return (
    <>
      {page.results.map(g => (
        <div key={g.id}>
          <Link to={`/academic-groups/${g.id}/${convertToSlug(g.title)}`}>{g.title}</Link>
        </div>
      ))}
    </>
  );
}
