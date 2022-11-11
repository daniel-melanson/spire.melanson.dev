import { useEffect, useState } from "react";
import { Endpoints, PaginatedResult } from ".";
import { joinPath } from "../util/joinPath";

export function usePage<T extends keyof Endpoints>(
  path: T
): [PaginatedResult<Endpoints[T]> | undefined, () => void, () => void] {
  type Page = PaginatedResult<Endpoints[T]>;

  const [page, setPage] = useState(1);
  const [results, setResults] = useState<Page | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const res = await fetch(joinPath(`https://spire-api.melanson.dev`, path, `?page=${page}`));
      const results: Page = await res.json();

      setResults(results);
    })();
  }, [page]);

  return [results, () => setPage(page - 1), () => setPage(page + 1)];
}
