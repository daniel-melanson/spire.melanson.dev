import { useParams } from "react-router-dom";

export default function AcademicGroups() {
  const { id } = useParams();
  if (!id) return <div />;

  return <div></div>;
}
