import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { SidebarProvider } from "./components/SidebarContext";
import Sidebar from "./components/Sidebar";
import { Suspense } from "react";
import Loading from "./loading";
import Script from "next/script";
import Image from "next/image";

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
      <head>
        <meta
          name="google-site-verification"
          content="ironeutXhmCnTSBbPPyeJKxKZTWhqypUM8ssFKquPz8"
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KQ2S7FV8V5"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-KQ2S7FV8V5');
`
          }}
        />
      </head>
      <body className="antialiased bg-[#eeeeee]">
        <Suspense fallback={<Loading />}>
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
                  </div>
                  <div className="bg-black w-full overflow-hidden py-1">
                    <div className="marquee">
                      <div className="marquee-content">
                        <span className="text-white">
                          The booking for the jersey has been closed. Thank you
                          for your interest. For more information, please
                          contact the event coordinators.
                        </span>
                        <span className="text-white">
                          The booking for the jersey has been closed. Thank you
                          for your interest. For more information, please
                          contact the event coordinators.
                        </span>
                      </div>
                    </div>
                  </div>
                </nav>
                {children}
                <footer>
                  <div className="bg-blue px-8 xl:px-[5.5rem] py-8 flex flex-col sm:flex-row items-center justify-between text-white">
                    <div className=" flex flex-col sm:flex-row items-center justify-center">
                      <div className="flex gap-4 items-center md:flex-col lg:flex-row justify-around">
                        <div className="h-[6rem] w-[6rem] lg:h-[8rem] lg:w-[8rem] flex items-center justify-center relative">
                          <Image
                            loading="lazy"
                            src={"/assets/ssc-logo.svg"}
                            style={{ objectFit: "cover" }}
                            fill
                            alt="ssc-logo"
                          />
                        </div>

                        <div className="lg:w-[13rem] lg:h-[5rem] w-[10rem] h-[4rem] flex items-center justify-center md:mt-4 lg:mt-0 relative">
                          <Image
                            src="/assets/silicon-logo.png"
                            className="w-full h-full"
                            alt="silicon-logo"
                            // layout="fill"
                            fill
                            // objectFit="cover"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className=" flex xl:gap-12 flex-col lg:flex-row  mt-8 sm:mt-0">
                      <div className="">
                        <p className="font-[600] text-[1.25rem] underline">
                          VENUE
                        </p>
                        <p className=" mt-2">
                          Silicon Institute of Technology <br />
                          Silicon West, Sason, Sambalpur, Odisha <br />
                          Pin: 768200
                        </p>
                      </div>
                      <div className="mt-4 sm:mt-0">
                        <p className="font-[600] text-[1.25rem] underline md:mt-2 xl:mt-0">
                          CONTACT
                        </p>
                        <p className="mt-2">
                          Sandeep Prusty (Sports Secretary) : +917978699617{" "}
                          <br />
                          Satyabrat Panigrahi (Secretary General) :
                          +917853998437 <br />
                          Saswat Ranjan Pattnaik (Secretary Amenities) :
                          +918249097228
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-black py-2">
                    <p className="text-white text-center text-[0.75rem]">
                      &copy; 2025 Silicon Sports Club. All Rights Reserved.
                    </p>
                  </div>
                </footer>
              </div>
            </div>
          </SidebarProvider>
        </Suspense>
      </body>
    </html>
  );
}
