import React, { useState } from "react";
import {
  Box,
  Typography,
  Divider,
  Stack,
  TextField,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import { MultiSelect } from "../../util/MultiSelect";
import { getCategoryNames, getsubcategory } from "../../util/ListOfCategories";
import { PostImage } from "../../styling/CreatePosts";
import { CreatePostSpecification } from "../../util/CreatePostSpecification";

export default function CreatePost() {
  const [categories, setCategories] = useState(getCategoryNames());
  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [previewImages, setPreviewImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  function addImages(event) {
    if (previewImages.length == 3) {
      alert("The maximum number of images to add is 3");
      return;
    }
    setPreviewImages([
      ...previewImages,
      URL.createObjectURL(event.target.files[0]),
    ]);
  }

  return (
    <Box>
      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <Box component="form">
          <Box>
            <Typography style={{ marginBottom: "10px" }}>
              Product category
            </Typography>
            <Stack spacing={2}>
              <MultiSelect
                name="Product category"
                listOfElements={categories}
                clickedValue={(categoryName) => {
                  setSubcategories(getsubcategory(categoryName));
                  // console.log(typeof categoryName);
                  setSelectedCategory(categoryName);
                }}
              />
              <MultiSelect
                name="sub-category"
                listOfElements={subcategories}
                clickedValue={(subcategoryName) =>
                  setSelectedSubcategory(subcategoryName)
                }
              />
            </Stack>
          </Box>
          <Box style={{ marginBottom: "35px", marginTop: "35px" }}>
            <Typography style={{ marginBottom: "10px" }}>
              Add image(s)
            </Typography>
            <PostImage>
              <Box>
                <input type="file" accept="image/*" onChange={addImages} />

                <Typography>
                  Add some images. You can add up to 3 images
                </Typography>
              </Box>
            </PostImage>
            <Divider />
            <Stack direction="row" spacing={2} style={{ marginTop: "20px" }}>
              {previewImages.map((imageUrl, index) => (
                <Box style={{ width: "200px", height: "200px" }}>
                  <img
                    key={index}
                    src={imageUrl}
                    alt="Posting preview"
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Box>
              ))}
            </Stack>
          </Box>
          <Box>
            <Typography style={{ marginBottom: "10px" }}>
              Product details
            </Typography>
            <Stack spacing={2}>
              <TextField label="Product title" variant="outlined" />
              <Box>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Amount
                </InputLabel>
                <OutlinedInput
                  style={{ width: "100%" }}
                  id="outlined-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">BTC</InputAdornment>
                  }
                />
              </Box>
              <TextField
                label="Product description"
                variant="outlined"
                multiline
                rows={7}
                placeholder="What other details do you want buyers to know about?"
              />
              <MultiSelect
                name="Condition"
                listOfElements={["new", "used"]}
                // clickedValue={(subcategoryName) =>
                //   setSelectedSubcategory(subcategoryName)
                // }
              />
              {CreatePostSpecification(selectedCategory, selectedSubcategory)}
            </Stack>
          </Box>
        </Box>
      )}
    </Box>
  );
}
