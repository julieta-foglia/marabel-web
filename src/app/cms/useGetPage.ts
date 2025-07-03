import { useMutation } from "@tanstack/react-query";
import { pageQuery } from "./constants";
import { getQuery } from "./getQuery";

interface QueryResponse {
  paginaCollection: {
    items: Array<any>;
  };
}

interface Payload {
  title: string;
}

const getPageMutate = async ({ title }: Payload) => {
  try {
    const query = pageQuery(title);
    const data = await getQuery<QueryResponse>({ query });

    const [page] = data.data.paginaCollection.items;

    return page;
  } catch (error) {
    throw error;
  }
};

export const useGetPage = () => {
  const {
    mutate: getPage,
    data,
    error,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: (payload: Payload) => getPageMutate(payload),
  });
  return {
    getPage,
    page: data,
    error,
    isPending,
    isSuccess,
  };
};
