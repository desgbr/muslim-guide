import { Title } from "@/types/azkar";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Store = {
  favorite: Title[];
  count: number;
  add: (item: Title) => void;
  remove: (id: number) => void;
  isFavorite: (id: number) => boolean;
};

export const useFavorite = create<Store>()(
  persist(
    (set, get) => ({
      favorite: [],
      count: 0,
      add: (item: Title) => {
        const current = get().favorite;
        const itemIdx = current.findIndex((i) => i.id === item.id);
        let updatedFavorite;

        if (itemIdx === -1) {
          updatedFavorite = [...current, item];
        } else {
          updatedFavorite = current.map((i, idx) =>
            idx === itemIdx ? item : i
          );
        }

        set(() => ({
          favorite: updatedFavorite,
          count: updatedFavorite.length,
        }));
      },
      remove: (id: number) => {
        const current = get().favorite;
        const updatedFavorite = current.filter((item: Title) => item.id !== id);

        set(() => ({
          favorite: updatedFavorite,
          count: updatedFavorite.length,
        }));
      },
      isFavorite: (id: number) => {
        const current = get().favorite;
        return current.some((item: Title) => item.id === id);
      },
    }),
    {
      name: "favorite",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
