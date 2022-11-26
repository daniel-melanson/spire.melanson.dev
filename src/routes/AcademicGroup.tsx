import { useLoaderData } from "react-router-dom";

export default function AcademicGroup() {
  const group = useLoaderData();

  return <div>{JSON.stringify(group, undefined, 2)}</div>;
}
