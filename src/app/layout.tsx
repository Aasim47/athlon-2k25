// "use client";

import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { SidebarProvider } from "./components/SidebarContext";
import Sidebar from "./components/Sidebar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"]
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"]
// });

export const metadata: Metadata = {
  title: "ATHLON 2K25",
  description:
    "Welcome to the annual atheletic meet of SITWEST. Feel the adrenaline rush and the spirit of sportsmanship."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#eeeeee]">
        <SidebarProvider>
          <div className="">
            <Sidebar />
            <div className="flex-1">
              <nav className="bg-blue fixed top-0 w-[100dvw] z-10 shadow-md">
                <div className="p-4 px-6 xl:px-[5.5rem] flex justify-between items-center">
                  <p className="facon text-[1.5rem] m-0 p-0 leading-normal">
                    <Link href={"/"}>ATHLON 2K25</Link>
                  </p>
                  <Link href={"/jersey"} className="hidden sm:block">
                    <button className="px-6 py-2 bg-white text-blue font-[600] rounded-lg border-none hover:bg-blue hover:text-white transition-colors duration-300">
                      book jersey
                    </button>
                  </Link>
                  {/* <button onClick={() => toggleSidebar()} className="sm:hidden">
                    Toggle Sidebar
                  </button> */}
                </div>
              </nav>
              {children}
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
