import { Title } from "@/types/azkar";

interface HandleFavorite {
  item: Title;
  add: (item: Title) => void;
  remove: (id: number) => void;
  isFav: boolean;
}

export const handleFavoriteAction = ({
  item,
  add,
  remove,
  isFav,
}: HandleFavorite): void => {
  if (isFav) {
    remove(item.id);
  } else {
    add(item);
  }
};
