import { Title } from "@/types/azkar";
import React from "react";
import TitleComponent from "../ui/TitleComponent";
import BookmarkIcon from "@/icons/BookmarkIcon";
import FavoriteButton from "../ui/FavoriteButton";

function FavoriteCard({ item }: { item: Title }) {
  return (
    <div className="p-4 rounded-md border hover:bg-sky-50 group transition-colors duration-700 relative">
      <div className="size-12 p-2 rounded-md bg-sky-100 flex items-center justify-center group-hover:bg-sky-950 text-sky-700 group-hover:text-sky-300">
        <BookmarkIcon height={32} />
      </div>
      <TitleComponent title={item.title} className="mt-4" />
      <FavoriteButton
        item={item}
        className="absolute left-3 top-3 w-12"
        iconWidth={27}
      />
    </div>
  );
}

export default FavoriteCard;
