'use client'
import  {useState} from "react";
import useSWR from "swr";
import {getTafseerList} from "@/services/quran/tafseer";
import {Tafseer} from "@/types/tafseer";
interface TafseerProps {
  selectedTafseer: Tafseer | null;
  setSelectedTafseer: (tafseer: Tafseer) => void;
}
export default function TafseerList({selectedTafseer, setSelectedTafseer} : TafseerProps) {
    const [open, setOpen] =   useState(false)
  const {data} = useSWR('tafseer-list', getTafseerList, {
    onSuccess: res =>  setSelectedTafseer(res[0]),
    revalidateOnFocus:false,
    refreshInterval: 30 * 60 * 60 * 1000})

  return <div className="relative w-40 pt-4">
    <div className="inline-flex items-center overflow-hidden rounded-md border bg-emerald-800">
      <div
          className="border-e px-4 py-2 text-sm/none text-white hover:bg-gray-50 hover:text-gray-700 w-40"
      >
          {selectedTafseer?.name || 'التفاسير' }
      </div>

      <button onClick={() => setOpen(prev => !prev)} className="h-full p-2 text-white hover:bg-gray-50 hover:text-gray-700">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
          <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
          />
        </svg>
      </button>
    </div>

      {open && <div
          className="absolute start-0 z-10 mt-2 w-48 rounded-md border border-gray-100 bg-white shadow-lg"
          role="menu"
      >
          <div className="p-2 max-h-40 overflow-y-auto scroll-bar">
            {data?.map((tafseer: Tafseer) => <button
                onClick={() => {
                  setSelectedTafseer(tafseer)
                  setOpen(false)
                }}
                key={tafseer.id}
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                role="menuitem"
            >{tafseer.name}
            </button>)}
          </div>
      </div>}
  </div>
}