import { IconLayoutSidebarLeftExpand } from "@tabler/icons-react";

export const Titlebar = () => {
  return (
    <div
      data-tauri-drag-region
      className="flex justify-between items-center border-b gap-4 w-full h-8 px-4 pl-20"
    >
      <section>
        <IconLayoutSidebarLeftExpand className="text-neutral-500" />
      </section>
      <section>test</section>
    </div>
  );
};
