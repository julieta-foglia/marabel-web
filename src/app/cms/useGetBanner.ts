import { useMutation } from "@tanstack/react-query";
import { bannerQuery } from "./constants";
import { getQuery } from "./getQuery";

interface BannerQueryResponse {
  bannerCollection: {
    items: Array<any>;
  };
}

interface BannerPayload {
  title: string;
}

const getBannerMutate = async ({ title }: BannerPayload) => {
  try {
    const query = bannerQuery(title);
    const data = await getQuery<BannerQueryResponse>({ query });

    const [banner] = data.data.bannerCollection.items;

    return banner;
  } catch (error) {
    throw error;
  }
};

export const useGetBanner = () => {
  const {
    mutate: getBanner,
    data,
    error,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: (payload: BannerPayload) => getBannerMutate(payload),
  });
  return {
    getBanner,
    banner: data,
    error,
    isPending,
    isSuccess,
  };
};
