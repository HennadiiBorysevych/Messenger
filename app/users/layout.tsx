import React from "react";
import SideBar from "../components/SideBar";

type Props = {};

export default async function Userslayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // @ts-expect-error Server Component
    <SideBar>
      <div className="h-full">{children}</div>
    </SideBar>
  );
}
