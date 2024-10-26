"use client";
import React, { useEffect, useState } from "react";
import { Scheherazade_New } from "next/font/google";
import useSWR from "swr";
import { getRondamAyah } from "@/services/quran/ayah";
const amiriQuran = Scheherazade_New({
  weight: ["400"],
  subsets: ["arabic"],
  variable: "--font-amiri",
  display: "swap",
});
function AyaCard() {
  const [ayahNumber, setAyahNumber] = useState(1);
  useEffect(() => {
    const ayahNumber = Math.floor(Math.random() * 6237);
    setAyahNumber(ayahNumber);
  }, []);
  const { data: ayahRes } = useSWR(
    `rondom-ayah-${ayahNumber}`,
    () => getRondamAyah(ayahNumber),
    {
      revalidateOnFocus: false,
      errorRetryCount: 5,
    }
  );
  console.log("data", ayahRes);
  return (
    <div
      className={`${amiriQuran.variable} font-quran text-2xl text-center divide-y flex flex-col gap-6`}
    >
      <p>{ayahRes?.data?.text || ""}</p>
      <div className="flex gap-4 justify-between font-sans text-sm font-bold text-yellow-800 pt-4 divide-x">
        <span>{ayahRes?.data?.surah?.name}</span>
        <span>رقم الآية : {ayahRes?.data?.surah?.numberOfAyahs}</span>
        <span>رقم الجزء : {ayahRes?.data?.juz}</span>
        <span>رقم الصفحة : {ayahRes?.data?.page}</span>
      </div>
    </div>
  );
}

export default AyaCard;
