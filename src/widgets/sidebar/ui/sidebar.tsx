import { paths } from "@/shared/router";
import { SidebarItem } from "./item";
import { AnimatePresence, motion } from "framer-motion";
import { useDisclosure } from "@/shared/lib/disclosure";
import { $sidebar } from "@/widgets/sidebar/model";
import { Home, List, User } from "lucide-react";
import { useLocation } from "react-router-dom";

export const Sidebar = () => {
  const sidebar = useDisclosure($sidebar);
  const location = useLocation();

  const items = [
    {
      label: "Home",
      href: paths.index,
      icon: <Home size={16} />,
    },
    {
      label: "TV Show List",
      href: paths.favorites,
      icon: <List size={16} />,
    },
    {
      label: "Profile",
      href: "#",
      icon: <User size={16} />,
    },
  ];

  return (
    <AnimatePresence mode="popLayout">
      {sidebar.state && (
        <motion.aside
          animate={{ width: "w-48", opacity: 1, x: 0 }}
          exit={{ width: 0, opacity: 0, x: -200 }}
          className="w-48 p-4 h-full border-r"
        >
          <section className="flex flex-col gap-2">
            {items.map((item) => (
              <SidebarItem
                active={location.pathname === item.href}
                to={item.href}
              >
                {item.icon}
                {item.label}
              </SidebarItem>
            ))}
          </section>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};
