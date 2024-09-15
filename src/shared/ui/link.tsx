import { paths } from "@/shared/router";
import {
  Link as Href,
  LinkProps as HrefProps,
  useLocation,
} from "react-router-dom";
import { FC } from "react";
import { cn } from "@/shared/lib/tw";

export interface LinkProps extends HrefProps {
  to: string;
  activeClass?: string;
}

export const Link: FC<LinkProps> = ({
  to,
  children,
  activeClass = "",
  className,
  ...props
}) => {
  const location = useLocation();

  return (
    <Href
      to={to}
      className={cn(className, {
        [activeClass]: location.pathname === to,
      })}
      {...props}
    >
      {children}
    </Href>
  );
};
