import { useMutation } from "@tanstack/react-query";
import { imageFileQuery } from "./constants";
import { getQuery } from "./getQuery";

interface QueryResponse {
  assetCollection: {
    items: Array<any>;
  };
}

interface Payload {
  title: string;
}

const getAssetMutate = async ({ title }: Payload) => {
  try {
    const query = imageFileQuery(title);
    const data = await getQuery<QueryResponse>({ query });

    const [asset] = data.data.assetCollection.items;

    return asset;
  } catch (error) {
    throw error;
  }
};

export const useGetAsset = () => {
  const {
    mutate: getAsset,
    data,
    error,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: (payload: Payload) => getAssetMutate(payload),
  });
  return {
    getAsset,
    asset: data,
    error,
    isPending,
    isSuccess,
  };
};
