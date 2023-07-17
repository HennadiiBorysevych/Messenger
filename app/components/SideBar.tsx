import React from "react";
import DesktopSidebar from "./sidebar/DesktopSidebar";
import MobileFooter from "./sidebar/MobileFooter";

async function SideBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full">
      <DesktopSidebar />
      <MobileFooter />
      <main> {children}</main>
    </div>
  );
}
export default SideBar;
