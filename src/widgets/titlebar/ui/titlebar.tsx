import { Disclosure, useDisclosure } from "@/shared/lib/disclosure";
import { FC } from "react";
import { PanelRightClose, PanelRightOpen, Cog } from "lucide-react";
import { IconButton } from "@/shared/ui/icon-button";
import { Link } from "@/shared/ui/link";
import { paths } from "@/shared/router";

export interface TitlebarProps {
  $sidebar: Disclosure;
}

export const Titlebar: FC<TitlebarProps> = ({ $sidebar }) => {
  const sidebar = useDisclosure($sidebar);

  return (
    <div
      data-tauri-drag-region
      className="flex justify-between items-center border-b gap-4 w-full h-8 px-4 pl-20 select-none"
    >
      <section>
        <IconButton
          icon={
            sidebar.state ? (
              <PanelRightClose size={20} onClick={sidebar.close} />
            ) : (
              <PanelRightOpen size={20} onClick={sidebar.open} />
            )
          }
        />
      </section>
      <section>
        <Link to={paths.settings}>
          <Cog size={18} />
        </Link>
      </section>
    </div>
  );
};
