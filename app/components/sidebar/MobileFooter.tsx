"use client";
type Props = {};
import useRoutes from "@/app/hooks/useRoutes";
import useConversation from "@/app/hooks/useConversation";
import MobileItem from "./MobileItem";

const MobileFooter = (props: Props) => {
  const routes = useRoutes();
  const { isOpen } = useConversation();
  if (isOpen) {
    return null;
  }

  return (
    <div className="fixed justify-between w-full bottom-0 z-40 flex items-center bg-white border-t-[1px] lg:hidden">
        {routes.map((route)=>{
          return  <MobileItem key={route.href} href={route.href} active={route.active} icon={route.icon} onClick={route.onClick}/>
        })}
    </div>
  );
};

export default MobileFooter;
