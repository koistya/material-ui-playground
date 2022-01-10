/* SPDX-FileCopyrightText: 2021-present Konstantin Tarkus (hello@endtest.dev) */
/* SPDX-License-Identifier: MIT */

import * as React from "react";
import { TextField, Autocomplete } from "@mui/material";
import type { AutocompleteProps } from "@mui/material";
import { projects } from "./data";

type Option = { id: string; label: string };
type ComboboxProps = Omit<
  AutocompleteProps<Option, undefined, undefined, undefined, undefined>,
  "renderInput" | "options"
>;

/**
 * TODO: Build a combobox based on Material UI Autocomplete component.
 *
 * @see https://mui.com/components/autocomplete/
 */
function Combobox(props: ComboboxProps): JSX.Element {
  const { sx, ...other } = props;

  const renderInput = React.useCallback(
    (props) => <TextField placeholder="Select a project..." {...props} />,
    []
  );

  return (
    <Autocomplete
      sx={{ /* CSS */ ...sx }}
      options={projects}
      renderInput={renderInput}
      {...other}
    />
  );
}

export { Combobox };
export type { ComboboxProps };
