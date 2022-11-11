import { useEffect, useState } from "react";
import { Endpoints } from "../api";

function joinPath(...args: string[]): string {
  return args
    .map((part, i) => {
      if (i === 0) {
        return part.trim().replace(/[/]*$/g, "");
      } else {
        return part.trim().replace(/(^[/]*|[/]*$)/g, "");
      }
    })
    .filter(x => x.length > 0)
    .join("/");
}

export function useObject<T extends keyof Endpoints & string>(path: T, id: string): Endpoints[T] | undefined {
  type APIObject = Endpoints[T];
  const [object, setObject] = useState<APIObject | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const res = await fetch(joinPath(`https://spire-api.melanson.dev/`, path, id));
      const result: APIObject = await res.json();

      setObject(result);
    })();
  }, []);

  return object;
}
