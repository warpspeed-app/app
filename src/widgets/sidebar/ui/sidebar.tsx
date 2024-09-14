import { paths } from "@/shared/router";
import { SidebarItem } from "./item";

export const Sidebar = () => {
  const items = [
    {
      label: "Home",
      href: paths.index,
    },
    {
      label: "TV Show List",
      href: paths.favorites,
    },
    {
      label: "Profile",
      href: "#",
    },
  ];

  return (
    <aside className="w-48 p-4 h-full border-r">
      <section className="flex flex-col gap-2">
        {items.map((item) => (
          <SidebarItem active={item.label === "Home"} to={item.href}>
            {item.label}
          </SidebarItem>
        ))}
      </section>
    </aside>
  );
};
