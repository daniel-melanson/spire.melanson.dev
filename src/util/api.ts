export interface PaginatedResult<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<T>;
}

interface HyperlinkedObjectField {
  url: string;
  id: string;
}

type HyperlinkedTitledObjectField = HyperlinkedObjectField & { title: string };

export interface IAcademicGroup {
  url: string;
  title: string;
  id: number;
  subjects: Array<HyperlinkedObjectField>;
}

export interface ISubject {
  url: string;
  title: string;
  id: string;
  groups: HyperlinkedTitledObjectField;
}

export interface ICourseOffering {
  url: string;
  course: HyperlinkedObjectField;
  sections: HyperlinkedObjectField;
  alternative_title: string | null;
  term: string;
  subject: HyperlinkedTitledObjectField;
}

export type ICourseOfferingField = Pick<ICourseOffering, "url" | "term">;

export interface ICourse {
  url: string;
  id: string;
  subject: HyperlinkedTitledObjectField;
  number: string;
  title: string;
  description: string | null;
  details: string | null;
  enrollment_information: string | null;
  offerings: Array<ICourseOfferingField>;
}

export async function api(endpoint: string) {
  const res = await fetch(endpoint.startsWith("/") ? "https://spire-api.melanson.dev" + endpoint : endpoint);

  return await res.json();
}
