"use client";
import React, { useEffect, useState } from "react";
import { Scheherazade_New } from "next/font/google";
import useSWR from "swr";
import { getRondamAyah } from "@/services/quran/ayah";
import TafseerList from "@/components/home/TafseerList";
import {Tafseer} from "@/types/tafseer";
import {getVerseTafseer} from "@/services/quran/tafseer";
import {AyahT} from "@/types/quran";
const amiriQuran = Scheherazade_New({
  weight: ["400"],
  subsets: ["arabic"],
  variable: "--font-amiri",
  display: "swap",
});
function AyaCard() {
  const [ayahNumber, setAyahNumber] = useState(1);
  const [ayahData, setAyahData] = useState<AyahT>({} as AyahT);
  const [selectedTafseer, setSelectedTafseer] =   useState<Tafseer>({} as Tafseer)
  useEffect(() => {
    const ayahNumber = Math.floor(Math.random() * 6237);
    setAyahNumber(ayahNumber);
  }, []);

  const {data: VerseTafseerData, mutate} = useSWR( () => ayahData ?
      [
          "Verse-tafseer",
          selectedTafseer?.id,
          ayahData?.surah?.number,
          ayahData.numberInSurah,

      ] : null,
      async () => await getVerseTafseer(selectedTafseer?.id, ayahData?.surah?.number, ayahData?.numberInSurah ),
      {
        revalidateOnFocus: false,
        errorRetryCount: 5,
      })

  useSWR(
    `rondom-ayah-${ayahNumber}`,
    () => getRondamAyah(ayahNumber),
    {
      onSuccess: res => {
        setAyahData(res.data)
        mutate()

      } ,
      revalidateOnFocus: false,
      errorRetryCount: 5,
    }
  );
  useEffect(() => {
    mutate()
  }, [ayahData, selectedTafseer])
  console.log("data",VerseTafseerData)
  return (
    <div
      className={`${amiriQuran.variable} font-quran text-2xl text-center divide-y flex flex-col gap-6`}
    >
      <p>{ayahData?.text || ""}</p>
      <div className="flex gap-4 justify-between font-sans text-sm font-bold text-yellow-800 pt-4 divide-x">
        <span>{ayahData?.surah?.name}</span>
        <span>رقم الآية : {ayahData?.numberInSurah}</span>
        <span>رقم الجزء : {ayahData?.juz}</span>
        <span>رقم الصفحة : {ayahData?.page}</span>
      </div>
      <div className="flex justify-center flex-col gap-4 items-center font-sans text-[14px]">
        <div className="">
          <h3 className='text-emerald-800 font-bold'>التفسير</h3>
        <p>{VerseTafseerData?.text}</p>
        </div>
      <TafseerList selectedTafseer={selectedTafseer} setSelectedTafseer={setSelectedTafseer}/>
      </div>
    </div>
  );
}

export default AyaCard;
