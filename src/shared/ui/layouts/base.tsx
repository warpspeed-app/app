import { FC, PropsWithChildren } from "react";
import { BarSlot, ContentSlot, SidebarSlot } from "./slots";
import { AnimatePresence, motion } from "framer-motion";

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.main className="container h-[calc(100%-32px)] flex flex-row">
      <SidebarSlot.Renderer nodes={children} />
      <motion.div
        layout
        className="flex flex-col flex-1 w-full transition-all duration-500 p-4 gap-4"
        transition={{ duration: 1 }}
      >
        <BarSlot.Renderer nodes={children} />
        <AnimatePresence mode="wait">
          <ContentSlot.Renderer nodes={children} />
        </AnimatePresence>
      </motion.div>
    </motion.main>
  );
};
