import { useEffect, useState } from "react";
import { Endpoints } from "../api";
import { joinPath } from "../util/joinPath";

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
