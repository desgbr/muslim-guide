import TitleComponent from "@/components/ui/TitleComponent";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="px-6 py-4 bg-emerald-800">
      <div className="container">
        <Link href="/" className="flex gap-4 items-center">
          <Image
            src="/assets/hisn-almuslim.webp"
            width={24}
            height={24}
            alt="حصن المسلم"
          />
          <TitleComponent title="دليل المسلم" className="mb-0 text-white" />
        </Link>
      </div>
    </header>
  );
}
