import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { SidebarProvider } from "./components/SidebarContext";
import Sidebar from "./components/Sidebar";
import { Suspense } from "react";
import Loading from "./loading";
import Script from "next/script";

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
              </div>
            </div>
          </SidebarProvider>
        </Suspense>
      </body>
    </html>
  );
}
