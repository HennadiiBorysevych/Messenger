import getCurrentUser from "@/app/actions/getCurrentUser";
import React from "react";
import DesktopSidebar from "./DesktopSidebar";
import MobileFooter from "./MobileFooter";

async function SideBar({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser();
  return (
    <div className="h-full">
      <DesktopSidebar currentUser={currentUser!} />
      <MobileFooter />
      <main> {children}</main>
    </div>
  );
}
export default SideBar;
