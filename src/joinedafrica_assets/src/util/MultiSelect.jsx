import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export function MultiSelect({ name, listOfElements, clickedValue }) {
  // const [selectedValue, setSelectedValue] = useState("");

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="select-label">{name}</InputLabel>
        <Select
          id="select-label"
          defaultValue=""
          label={name}
          // some MultiSelect select elements don't have the clickedValue function
          // so we have to have an optional check
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
