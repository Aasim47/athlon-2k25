"use client";

import React from "react";
import { useSidebar } from "./SidebarContext";
import { RxCross2 } from "react-icons/rx";

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <div
      className={`h-[100dvh] bg-[#eeeeee] xl:w-[30dvw] sm:w-1/2 w-full fixed z-[15] right-0 shadow-md overflow-y-scroll hide-scrollbar transition-transform duration-300 ${
        isSidebarOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button onClick={toggleSidebar} className="text-black m-4">
        <RxCross2 className="text-[1.5rem]" />
      </button>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSclLfbRVTm1KeyuLHzMzmdL1s_7-kxSlld2U2DhW7OcHITNkQ/viewform?embedded=true"
        width="100%"
        height="100%"
        style={{ minHeight: "1530px", minWidth: "100%" }}
      >
        Loading…
      </iframe>
    </div>
  );
};

export default Sidebar;
