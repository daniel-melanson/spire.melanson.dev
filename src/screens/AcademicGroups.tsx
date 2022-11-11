import { Link } from "react-router-dom";
import { usePage } from "../api/usePage";
import { convertToSlug } from "../util/string";

export default function AcademicGroups() {
  const [page, ,] = usePage("academic-groups");

  return page ? (
    <div>
      {page.results.map(group => (
        <p key={group.id}>
          <Link to={`/academic-groups/${group.id}/${convertToSlug(group.title)}/`}>{group.title}</Link>
        </p>
      ))}
    </div>
  ) : (
    <div>Loading...</div>
  );
}
