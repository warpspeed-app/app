import { FavoritesPage } from "@/pages/favorites/ui";
import { HomePage } from "@/pages/home/ui";
import { paths } from "@/shared/router";
import { BaseLayout } from "@/shared/ui/layouts/base";
import { BarSlot, ContentSlot, SidebarSlot } from "@/shared/ui/layouts/slots";
import { SuspenseLayout } from "@/shared/ui/layouts/suspense";
import { Sidebar } from "@/widgets/sidebar/ui";
import { Titlebar } from "@/widgets/titlebar/ui";
import { Outlet, RouteObject, useRoutes } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: paths.index,
    element: (
      <BaseLayout>
        <SidebarSlot>
          <Sidebar />
        </SidebarSlot>

        <BarSlot>hi</BarSlot>

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
];

export const AppRouter = () => (
  <SuspenseLayout>
    <Titlebar />
    {useRoutes(routes)}
  </SuspenseLayout>
);
