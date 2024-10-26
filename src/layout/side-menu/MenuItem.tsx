"use client";
import FavoriteButton from "@/components/ui/FavoriteButton";
import BookIcon from "@/icons/BookIcon";
import { Title } from "@/types/azkar";
import Link from "next/link";
import React from "react";

function MenuItem({ item }: { item: Title }) {
  return (
    <div className="px-4 py-2 rounded-md text-sky-800 hover:text-white hover:bg-sky-950 flex items-center gap-3 flex-nowrap justify-between">
      <div className="w-full flex gap-4 items-center">
        <BookIcon width={20} height={20} />
        <Link className="" href={`/${item.url}`}>
          {item.title}
        </Link>
      </div>
      <FavoriteButton item={item} />
    </div>
  );
}

export default MenuItem;
