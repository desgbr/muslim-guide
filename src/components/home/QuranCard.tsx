import React from "react";
import TitleComponent from "../ui/TitleComponent";
import AyaCard from "./AyaCard";

function QuranCard() {
  return (
    <div className="col-span-full">
      <TitleComponent title="آية اليوم" className="" />
      <div className="border p-4 rounded-md bg-orange-50">
        <AyaCard />
      </div>
    </div>
  );
}

export default QuranCard;
