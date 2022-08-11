export interface PaginatedResult<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<T>;
}

export interface IAcademicGroup {
  url: string;
  title: string;
  id: number;
}

export async function api(endpoint: string) {
  const res = await fetch(endpoint.startsWith("/") ? "https://spire-api.melanson.dev" + endpoint : endpoint);

  return await res.json();
}
