import FavoritesList from "@/components/home/Favorites";
import QuranCard from "@/components/home/QuranCard";
import React from "react";
export const dynamic = "force-dynamic"
export default function page() {
  return (
    <div className="grid md:grid-cols-4 gap-4">
      <FavoritesList />
      <QuranCard />
    </div>
  );
}
