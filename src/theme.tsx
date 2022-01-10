/* SPDX-FileCopyrightText: 2021-present Konstantin Tarkus (hello@endtest.dev) */
/* SPDX-License-Identifier: MIT */

import * as React from "react";
import {
  PaletteMode,
  ThemeProvider as MuiThemeProvider,
  useTheme as useMuiTheme
} from "@mui/material";
import type { Theme } from "@mui/material";
import { createTheme as createMuiTheme } from "@mui/material/styles";

type ThemeProviderProps = { children: React.ReactNode };

const ToggleThemeContext = React.createContext(() => {});

/**
 * Creates a customized version of Material UI theme.
 *
 * @see https://mui.com/customization/theming/
 * @see https://mui.com/customization/default-theme/
 */
function createTheme(mode: PaletteMode): Theme {
  return createMuiTheme({
    palette: {
      mode,
      background: {
        default: mode === "light" ? "rgba(242,246,252,1)" : "#121212"
      }
    }
  });
}

function ThemeProvider(props: ThemeProviderProps): JSX.Element {
  const [theme, setTheme] = React.useState(() => createTheme("light"));
  const changeTheme = React.useCallback(() => {
    setTheme(createTheme(theme.palette.mode === "light" ? "dark" : "light"));
  }, [theme.palette.mode]);

  return (
    <MuiThemeProvider theme={theme}>
      <ToggleThemeContext.Provider value={changeTheme}>
        {props.children}
      </ToggleThemeContext.Provider>
    </MuiThemeProvider>
  );
}

function useTheme(): [Theme, () => void] {
  return [useMuiTheme(), React.useContext(ToggleThemeContext)];
}

export { ThemeProvider, useTheme };
