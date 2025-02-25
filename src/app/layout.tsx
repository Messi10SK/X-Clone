"use client";

import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-screen-md lg:max-w-screen-lg mx-auto xl:max-w-screen-xl xxl:max-w-screen-xxl flex justify-between h-screen">
          {/* LeftBar - Independent Scroll */}
          <div className="px-2 xsm:px-4 xxl:px-8 h-full overflow-y-auto custom-scrollbar">
            <LeftBar />
          </div>

          {/* Middle Content - Independent Scroll */}
          <div className="flex-1 lg:min-w-[600px] border-x-[1px] border-borderGray h-full overflow-y-auto custom-scrollbar">
            {children}
          </div>

          {/* RightBar - Independent Scroll */}
          <div className="hidden lg:flex ml-4 md:ml-8 flex-1 h-full overflow-y-auto custom-scrollbar">
            <RightBar />
          </div>
        </div>
      </body>
    </html>
  );
}
