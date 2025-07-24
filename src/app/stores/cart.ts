import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Article {
  name: string;
  fragrance: string;
  quantity: number;
  image: string;
}

export interface CartState {
  cart: Array<Article> | null;
  updateCart: (payload: Article) => void;
  removeFromCart: (payload: Pick<Article, "fragrance" | "name">) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: null,
      updateCart: (article) =>
        set((state) => {
          const filtered = (state.cart ?? []).filter(
            (item) =>
              item.name !== article.name ||
              (item.name === article.name &&
                item.fragrance !== article.fragrance)
          );
          return { cart: [...filtered, article] };
        }),
      clearCart: () =>
        set(() => ({
          cart: null,
        })),
      removeFromCart: (article) =>
        set((state) => {
          const filtered = state.cart?.filter(
            (item) =>
              item.name !== article.name ||
              (item.name === article.name &&
                item.fragrance !== article.fragrance)
          );
          return {
            cart: filtered,
          };
        }),
    }),
    {
      name: "cart",
    }
  )
);
