import { useMutation } from "@tanstack/react-query";
import { productsQuery } from "./constants";
import { getQuery } from "./getQuery";

interface QueryResponse {
  productoCollection: {
    items: Array<any>;
  };
}

interface Payload {
  category?: string;
}

const getProductsMutate = async (props?: Payload) => {
  try {
    const query = productsQuery(props?.category);
    const data = await getQuery<QueryResponse>({ query });
    return data.data.productoCollection.items;
  } catch (error) {
    throw error;
  }
};

export const useGetProducts = () => {
  const {
    mutate: getProducts,
    data,
    error,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: (payload?: Payload) => getProductsMutate(payload),
  });

  return {
    getProducts,
    products: data,
    error,
    isPending,
    isSuccess,
  };
};
