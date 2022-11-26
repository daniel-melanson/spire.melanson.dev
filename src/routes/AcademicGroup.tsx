import { LoaderFunction, useLoaderData } from "react-router-dom";

export default function AcademicGroup() {
  const group = useLoaderData();

  return <div>{JSON.stringify(group, undefined, 2)}</div>;
}

export const loader: LoaderFunction = ({ params }) =>
  fetch(`https://spire-api.melanson.dev/academic-groups/${params.id}`);
