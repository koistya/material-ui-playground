/* SPDX-FileCopyrightText: 2021-present Konstantin Tarkus (hello@endtest.dev) */
/* SPDX-License-Identifier: MIT */

import * as React from "react";
import { Typography, Toolbar, AppBar, IconButton } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import type { ToolbarProps } from "@mui/material";
import { useTheme } from "./theme";

type AppToolbarProps = Omit<ToolbarProps, "children">;

/**
 * Application toolbar.
 *
 * @see https://mui.com/components/app-bar/
 */
function AppToolbar(props: AppToolbarProps): JSX.Element {
  const [theme, toggleTheme] = useTheme();

  return (
    <React.Fragment>
      <AppBar {...props}>
        <Toolbar>
          <Typography sx={{ fontSize: "1.5rem", flexGrow: 1 }} variant="h3">
            Material UI Playground
          </Typography>

          <IconButton color="inherit" onClick={toggleTheme}>
            {theme.palette.mode === "light" ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}

export { AppToolbar };
export type { AppToolbarProps };
