"use client";
import FavoriteIcon from "@/icons/FavoriteIcon";
import { useFavorite } from "@/store/favoriteStore";
import { Title } from "@/types/azkar";
import { handleFavoriteAction } from "@/utils/favorite";
import React, { useEffect, useState } from "react";
interface Props {
  className?: string;
  item: Title;
  iconWidth?: number;
}
function FavoriteButton({ item, className, iconWidth = 24 }: Props) {
  const { add, remove, isFavorite, favorite } = useFavorite();
  const [isFav, setIsFav] = useState(false);
  useEffect(() => {
    const isFav = isFavorite(item.id);
    setIsFav(isFav);
  }, [favorite]);
  return (
    <button onClick={() => handleFavoriteAction({ item, add, remove, isFav })}>
      <FavoriteIcon
        width={iconWidth}
        height={iconWidth}
        className={`${className || ""}  ${
          isFav ? "text-red-600" : "text-slate-300"
        }`}
      />
    </button>
  );
}

export default FavoriteButton;
