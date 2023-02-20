import React from "react";
import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";

export function MultiSelect({ name, listOfElements, clickedValue }) {
  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="select-label">{name}</InputLabel>
        <Select
          id="select-label"
          defaultValue=""
          label={name}
          required
          onChange={(event) => clickedValue(event.target.value)}
        >
          {listOfElements.map((name, index) => (
            <MenuItem value={name} key={index}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
