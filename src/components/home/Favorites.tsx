"use client";
import React from "react";
import TitleComponent from "../ui/TitleComponent";
import { useFavorite } from "@/store/favoriteStore";
import FavoriteCard from "./FavoriteCard";
import { Title } from "@/types/azkar";

function FavoritesList() {
  const { count, favorite } = useFavorite();
  console.log("count, favorite", count, favorite);
  return (
    <div className="col-span-full">
      <div className="flex gap-2 items-center">
        <TitleComponent title="المفضلة" />
        <div className="size-6 text-sm gap-4 rounded-full bg-sky-200 text-sky-950 flex items-center justify-center">
          {" "}
          {count}
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {favorite.map((item: Title) => (
          <FavoriteCard key={`favorite-card-${item.id}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export default FavoritesList;
