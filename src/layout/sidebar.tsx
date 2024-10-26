import React from "react";
import SideMenu from "./side-menu";

export default function Sidebar() {
  return (
    <div className="w-72  max-h-screen h-full overflow-y-auto scroll-bar">
      <SideMenu />
    </div>
  );
}
