import { FC, HTMLAttributes } from "react";
import { cn } from "@/shared/lib/tw";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  center?: boolean;
}

export const Container: FC<ContainerProps> = ({
  children,
  className,
  center,
}) => {
  return (
    <div
      className={cn("container", className, {
        "mx-auto": center,
      })}
    >
      {children}
    </div>
  );
};

Container.displayName = "Container";
