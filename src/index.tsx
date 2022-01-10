/* SPDX-FileCopyrightText: 2021-present Konstantin Tarkus (hello@endtest.dev) */
/* SPDX-License-Identifier: MIT */

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Typography, CssBaseline, Container } from "@mui/material";
import { Combobox } from "./combobox";
import { AppToolbar } from "./toolbar";
import { ThemeProvider } from "./theme";

/**
 * The top-level (root) React component.
 *
 * @see https://reactjs.org/
 * @see https://mui.com/core/
 */
function App(): JSX.Element {
  return (
    <ThemeProvider>
      <CssBaseline />

      <AppToolbar />

      <Container sx={{ my: 4 }}>
        <Typography sx={{ mb: 2 }} variant="body2">
          Material UI Autocomplete playground 😁 See{" "}
          <b>
            <code>./src/combobox.tsx</code>
          </b>
        </Typography>

        <Combobox />
      </Container>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
