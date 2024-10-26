import { Title } from "@/types/azkar";
import React from "react";
import TitleComponent from "../ui/TitleComponent";
import BookmarkIcon from "@/icons/BookmarkIcon";
import FavoriteButton from "../ui/FavoriteButton";

function FavoriteCard({ item }: { item: Title }) {
  return (
    <div className="p-4 rounded-md border hover:bg-emerald-50 group transition-colors duration-700 relative">
      <div className="size-12 p-2 rounded-md bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-950 text-emerald-700 group-hover:text-emerald-300">
        <BookmarkIcon height={32} />
      </div>
      <TitleComponent title={item.title} className="mt-4 mb-0" />
      <FavoriteButton
        item={item}
        className="absolute left-3 top-3 w-10"
        iconWidth={27}
      />
    </div>
  );
}

export default FavoriteCard;
