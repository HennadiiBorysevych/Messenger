"use client";
import clsx from "clsx";
import Link from "next/link";

interface DesktopItemProps {
  label: string;
  icon: any;
  href: string;
  onClick?: () => void;
  avtive?: boolean;
}

const DesktopItem: React.FC<DesktopItemProps> = ({
  label,
  icon,
  href,
  onClick,
  avtive,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };
  return <div>DesktopItem</div>;
};

export default DesktopItem;
