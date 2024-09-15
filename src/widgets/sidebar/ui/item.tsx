import { Button } from "@/shared/ui/button";
import { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";

export interface SidebarItemProps extends PropsWithChildren {
  active?: boolean;
  to?: string;
}

export const SidebarItem: FC<SidebarItemProps> = ({
  children,
  to = "#",
  active = false,
}) => {
  return (
    <Link to={to}>
      <Button
        variant={active ? "default" : "outline"}
        className="w-full justify-start gap-2"
      >
        {children}
      </Button>
    </Link>
  );
};
