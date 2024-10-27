'use client';
import TitleComponent from "@/components/ui/TitleComponent";
import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import MenuIcon from '@/icons/MenuIcon'
import SideMenu from "@/layout/side-menu";
import CloseIcon from "@/icons/CloseIcon";

export default function Header() {
  const [show, setShow] = useState(false)
  return (
      <header className="px-6 py-4 bg-emerald-800">
        <div className="container flex justify-between items-center">
          <Link href="/" className="flex gap-4 items-center">
            <Image
                src="/assets/hisn-almuslim.webp"
                width={24}
                height={24}
                alt="حصن المسلم"
                className='mb-2.5'
            />
            <TitleComponent title="دليل المسلم" className="mb-0 text-white"/>
          </Link>
          {!show
              ? <MenuIcon onClick={() => setShow(true)} className='text-white size-6 cursor-pointer md:hidden'/>
              : <CloseIcon onClick={() => setShow(false)} className='text-white size-6 cursor-pointer md:hidden'/>
        }
          {show && <div className='bg-white  w-80 shadow-2xl fixed right-0 top-0 z-50 '>
              <div className=" h-dvh  overflow-y-auto scroll-bar">
                  <SideMenu/>

              </div>
          </div>}
        </div>
      </header>
  );
}
