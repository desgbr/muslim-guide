import React from "react";
import MenuItem from "./MenuItem";
import { titles } from "@/data/titles";
import { Title } from "@/types/azkar";

export default function SideMenu() {
  return (
    <div className="flex flex-col gap-2 p-2 font-sans">
      {titles.map((item: Title) => (
        <MenuItem key={item.url} item={item} />
      ))}
    </div>
  );
}
