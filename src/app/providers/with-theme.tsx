import { ThemeProvider } from "@/shared/lib/theme";
import { ReactElement } from "react";

export const withTheme = (component: () => ReactElement) => () =>
  (
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      {component()}
    </ThemeProvider>
  );
