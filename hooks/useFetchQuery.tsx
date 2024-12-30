import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

const endpoint = "https://pokeapi.co/api/v2";
type API = {
  "/pokemon?limit=21": {
    count: number;
    next: string | null;
    results: { name: string; url: string }[];
  };
  "/pokemon/[id]/": {
    id: number;
    name: string;
    url: string;
    weight: number;
    heigh: number;
    moves: { move: { name: string } }[];
    stats: {
      base_stat: number;
      stats: {
        name: string;
      };
    }[];
    cries: {
      latest: string;
    };
    types: {
      type: {
        name: string;
      };
    }[];
  };
};

export function useFetchQuery<T extends keyof API>(
  path: T,
  params?: Record<string, string | number>
) {
  const locallUrl = Object.entries(params ?? {}).reduce(
    (acc, [key, value]) => acc.replaceAll(`[${key}]`, String(value)),
    path
  );

  /**
   * useQuery prend on paramètre un objet et renverra un objet contenant plusieurs propriétés dont :
   * data, isFetching, isLoading, error etc
   */
  return useQuery({
    queryKey: [locallUrl],
    /**
     * son rôle est de vérifier si notre locallUrl a déjà été utilisé pour une précédente requête.
     * si c'est le cas, ça veut dire que react-query a déjà stocké dans le cache les résultats de cette requête
     * donc il ne fera plus appel à queryFn
     */ queryFn: async () => {
      /**
       * la methode  queyFn effectue la requete qui ici est asynchrone
       * c'est ce quelle renvoie qui sera ensuite stocké dans la propriété data
       * de l'objet de retour.
       */
      await wait(1); // fonction qui simule un léger temps d'attente
      return fetch(endpoint + locallUrl).then((r) => r.json());
    },
  });
}

export function useInfiniteFetchQuery<T extends keyof API>(
  path: T,
  params?: Record<string, string | number>
) {
  return useInfiniteQuery({
    queryKey: [path],
    initialPageParam: endpoint + path,
    queryFn: async (pageParam) => {
      await wait(1);
      return fetch(pageParam.pageParam, {
        headers: {
          Accept: "application/json",
        },
      }).then((r) => r.json());
    },
    getNextPageParam: (lastPage) => {
      if ("next" in lastPage) {
        return lastPage.next;
      }
      return null;
    },
  });
}

function wait(duration: number) {
  return new Promise((resolve) => setTimeout(resolve, duration * 1000));
}
