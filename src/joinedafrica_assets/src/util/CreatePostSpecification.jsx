import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MultiSelect } from "./MultiSelect";

export function CreatePostSpecification(categoryName, subCategoryName) {
  const [year, setYear] = React.useState("2023");
  if (
    categoryName === "Vehicles" ||
    categoryName === "Electronics" ||
    categoryName === "Mobile phones & Tablets"
  ) {
    return (
      <>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            views={["year"]}
            label="Year of manufacture"
            value={year}
            onChange={(input) => {
              setYear(input.$y);
            }}
            renderInput={(params) => (
              <TextField {...params} helperText={null} />
            )}
          />
        </LocalizationProvider>
        <TextField label="Name of manufacturer" variant="outlined" />
        <TextField label="Model" variant="outlined" />
      </>
    );
  }
  if (categoryName === "Health & Beauty") {
    return (
      <MultiSelect
        name="Gender"
        listOfElements={["male", "female", "unisex"]}
      />
    );
  }
  if (categoryName === "Property") {
    if (subCategoryName === "houses & apartments for sale") {
      return (
        <>
          <MultiSelect name="Furnished" listOfElements={["yes", "no"]} />
          <MultiSelect name="Parking space" listOfElements={["yes", "no"]} />
        </>
      );
    }
    if (subCategoryName === "houses & apartments for rent") {
      return (
        <>
          <MultiSelect name="Furnished" listOfElements={["yes", "no"]} />
          <MultiSelect name="Parking space" listOfElements={["yes", "no"]} />
          <TextField
            id="outlined-number"
            label="Duration of rent in months"
            type="number"
            inputProps={{ min: 1 }}
          />
        </>
      );
    }
    if (subCategoryName === "land & plots for sale") {
      return (
        <TextField
          id="outlined-number"
          label="Number of plots"
          type="number"
          inputProps={{ min: 1 }}
        />
      );
    }
  }
  return null;
}
