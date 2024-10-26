import React from "react";
import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full flex flex-row max-h-screen h-full font-cairo bg-emerald-800">
      <Sidebar />
      <div className="flex-grow flex flex-col">
        <Header />
        <div className="flex-grow h-[2000px] max-h-full overflow-y-auto p-4 rounded-md bg-white m-4">
          {children}
        </div>
        <Footer />
      </div>
    </main>
  );
}
