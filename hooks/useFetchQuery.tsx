import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

const endpoint = "https://pokeapi.co/api/v2";

export function useFetchQuery(path: string) {
  /**
   * useQuery prend on paramètre un objet et renverra un objet contenant plusieurs propriétés dont :
   * data, isFetching, isLoading, error etc
   */
  return useQuery({
    queryKey: [path],
    /**
     * son rôle est de vérifier si notre path a déjà été utilisé pour une précédente requête.
     * si c'est le cas, ça veut dire que react-query a déjà stocké dans le cache les résultats de cette requête
     * donc il ne fera plus appel à queryFn
     */ queryFn: async () => {
      /**
       * la methode  queyFn effectue la requete qui ici est asynchrone
       * c'est ce quelle renvoie qui sera ensuite stocké dans la propriété data
       * de l'objet de retour.
       */
      await wait(1); // fonction qui simule un léger temps d'attente
      return fetch(endpoint + path).then((r) => r.json());
    },
  });
}

export function useInfiniteFetchQuery(path: string) {
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
