import { useMutation } from "@tanstack/react-query";
import { ProductProps, ProductQueryResponse } from "../types";
import { productsQuery } from "./constants";
import { getQuery } from "./getQuery";

interface Payload {
  category?: string;
}

const getProductsMutate = async (props?: Payload): Promise<ProductProps[]> => {
  try {
    const query = productsQuery(props?.category);
    const data = await getQuery<ProductQueryResponse>({ query });
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
