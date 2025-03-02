"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import darkTheme from "./dark.theme";
import { ThemeProvider } from "@mui/material/styles";
import { FC, ReactNode } from "react";
import { useAuthenticate } from "./auth/auth-state";

interface ProvidersProps {
  children: ReactNode;
  authenticated: boolean;
}

export const Providers: FC<ProvidersProps> = ({ children, authenticated }) => {
  useAuthenticate(authenticated);

  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
    </AppRouterCacheProvider>
  );
};
