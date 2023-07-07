import React from "react";
import DesktopSidebar from "./sidebar/DesktopSidebar";

async function SideBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full">
      <DesktopSidebar />
      <main> {children}</main>
    </div>
  );
}
export default SideBar;
