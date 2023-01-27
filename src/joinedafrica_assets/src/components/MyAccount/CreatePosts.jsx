import React, { useEffect, useState } from "react";
import { Box, Typography, Divider } from "@mui/material";
import { MultiSelect } from "../../util/MultiSelect";
import { getCategoryNames, getsubcategory } from "../../util/ListOfCategories";

export default function CreatePost() {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getAllCategories() {
      setLoading(true);
      setCategories(getCategoryNames());

      setLoading(false);
    }
    getAllCategories();
  }, []);

  return (
    <Box>
      <Typography variant="h5"> Create Post</Typography>
      <Divider />
      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <Box component="form">
          <Box>
            <Typography>Product category</Typography>
            <MultiSelect
              name="Product category"
              listOfElements={categories}
              clickedValue={(categoryName) =>
                setSubcategories(getsubcategory(categoryName))
              }
            />
            <MultiSelect name="sub-category" listOfElements={subcategories} />
            <Typography>Add image(s)</Typography>
            <Box sx={{ border: "1px solid gray" }}>
              <Box>
                <input type="file" accept="image/*" />

                <Typography>
                  Add some images. You can add up to 3 images
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
