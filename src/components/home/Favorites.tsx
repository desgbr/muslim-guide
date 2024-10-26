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
      <div className="flex gap-2 items-center mb-4">
        <TitleComponent title="المفضلة" className="mb-0" />
        <div className="size-6 text-sm gap-4 rounded-full bg-emerald-200 text-emerald-950 flex items-center justify-center">
          {" "}
          {count}
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {favorite.length === 0 ? (
          <div className="col-span-full text-slate-300 text-xl md:text-2xl flex items-center justify-center rounded-md border p-4 md:p-8">
            لا يوجد عناصر في المفضلة
          </div>
        ) : (
          favorite.map((item: Title) => (
            <FavoriteCard key={`favorite-card-${item.id}`} item={item} />
          ))
        )}
      </div>
    </div>
  );
}

export default FavoritesList;
