import { FC, PropsWithChildren } from "react";
import { BarSlot, ContentSlot, SidebarSlot } from "./slots";

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="container h-[calc(100%-32px)] grid grid-cols-2">
      <SidebarSlot.Renderer nodes={children} />
      <div className="flex flex-col w-full">
        <BarSlot.Renderer nodes={children} />
        <ContentSlot.Renderer nodes={children} />
      </div>
    </main>
  );
};
