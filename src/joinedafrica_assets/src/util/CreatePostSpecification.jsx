import React, { useState } from "react";
import { TextField } from "@mui/material";
import { MultiSelect } from "./MultiSelect";

export function CreatePostSpecification(
  categoryName,
  subCategoryName,
  {
    setYearOfManufacture,
    setNameOfManufacturer,
    setModel,
    setGender,
    setIsFurnished,
    setHasParkingSpace,
    setDurationOfRenting,
    setNumberOfPlots,
  }
) {
  if (
    categoryName === "Vehicles" ||
    categoryName === "Electronics" ||
    categoryName === "Mobile phones & Tablets"
  ) {
    return (
      <>
        <TextField
          required
          type="number"
          label="Year of manufacture"
          variant="outlined"
          inputProps={{ min: 1900, max: 2099 }}
          onChange={(e) => setYearOfManufacture(e.target.value)}
        />
        <TextField
          required
          label="Name of manufacturer"
          variant="outlined"
          onChange={(e) => setNameOfManufacturer(e.target.value)}
        />
        <TextField
          required
          label="Model"
          variant="outlined"
          onChange={(e) => setModel(e.target.value)}
        />
      </>
    );
  }
  if (categoryName === "Health & Beauty") {
    return (
      <MultiSelect
        name="Gender"
        listOfElements={["male", "female", "unisex"]}
        clickedValue={(gender) => setGender(gender)}
      />
    );
  }
  if (categoryName === "Property") {
    if (
      subCategoryName === "houses & apartments for sale" ||
      subCategoryName === "houses & apartments for rent"
    ) {
      return (
        <>
          <MultiSelect
            name="Furnished"
            listOfElements={["yes", "no"]}
            clickedValue={(isFurnished) => setIsFurnished(isFurnished)}
          />
          <MultiSelect
            name="Parking space"
            listOfElements={["yes", "no"]}
            clickedValue={(hasParketingSpace) =>
              setHasParkingSpace(hasParketingSpace)
            }
          />
          {subCategoryName === "houses & apartments for rent" && (
            <TextField
              required
              id="outlined-number"
              label="Duration of rent in months"
              type="number"
              inputProps={{ min: 1 }}
              onChange={(e) => setDurationOfRenting(e.target.value)}
            />
          )}
        </>
      );
    }
    if (subCategoryName === "land & plots for sale") {
      return (
        <TextField
          required
          id="outlined-number"
          label="Number of plots"
          type="number"
          onChange={(e) => setNumberOfPlots(e.target.value)}
          inputProps={{ min: 1 }}
        />
      );
    }
  }
  return null;
}
