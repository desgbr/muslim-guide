import React from "react";
interface TitleProps {
  title: string;
  className?: string;
}
export default function TitleComponent({ title, className }: TitleProps) {
  return (
    <h2
      className={` text-xl font-bold mb-4 text-emerald-950 ${className || ""}`}
    >
      {title}
    </h2>
  );
}
