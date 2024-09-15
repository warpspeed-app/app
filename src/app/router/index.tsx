import { FavoritesPage } from "@/pages/favorites/ui";
import { HomePage } from "@/pages/home/ui";
import { SettingsPage } from "@/pages/settings/ui";
import { paths } from "@/shared/router";
import { BaseLayout } from "@/shared/ui/layouts/base";
import { SettingsLayout } from "@/shared/ui/layouts/setting";
import { BarSlot, ContentSlot, SidebarSlot } from "@/shared/ui/layouts/slots";
import { SuspenseLayout } from "@/shared/ui/layouts/suspense";
import { $sidebar } from "@/widgets/sidebar/model";
import { Sidebar } from "@/widgets/sidebar/ui";
import { Titlebar } from "@/widgets/titlebar/ui";
import { Toolbar } from "@/widgets/toolbar/ui";
import { Outlet, RouteObject, useRoutes } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: paths.index,
    element: (
      <BaseLayout>
        <SidebarSlot>
          <Sidebar />
        </SidebarSlot>

        <BarSlot>
          <Toolbar />
        </BarSlot>

        <ContentSlot>
          <Outlet />
        </ContentSlot>
      </BaseLayout>
    ),
    children: [
      {
        path: paths.index,
        element: <HomePage />,
      },
      {
        path: paths.favorites,
        element: <FavoritesPage />,
      },
    ],
  },
  {
    path: paths.settings,
    element: (
      <SettingsLayout>
        <SidebarSlot>
          <Sidebar />
        </SidebarSlot>

        <ContentSlot>
          <Outlet />
        </ContentSlot>
      </SettingsLayout>
    ),
    children: [
      {
        path: paths.settings,
        element: <SettingsPage />,
      },
    ],
  },
];

export const AppRouter = () => (
  <SuspenseLayout>
    <Titlebar $sidebar={$sidebar} />
    {useRoutes(routes)}
  </SuspenseLayout>
);
