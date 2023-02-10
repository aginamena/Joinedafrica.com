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
  Button,
} from "@mui/material";
import { MultiSelect } from "../../util/MultiSelect";
import { getCategoryNames, getsubcategory } from "../../util/ListOfCategories";
import { PostImage } from "../../styling/CreatePosts";
import { CreatePostSpecification } from "../../util/CreatePostSpecification";
import SendIcon from "@mui/icons-material/Send";

export default function CreatePost() {
  const [categories, setCategories] = useState(getCategoryNames());
  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [previewImages, setPreviewImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [productTitle, setProductTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [condition, setCondition] = useState("");
  const [yearOfManufacture, setYearOfManufacture] = useState("2022");
  const [nameOfManufacturer, setNameOfManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [gender, setGender] = useState("");
  const [isFurnished, setIsFurnished] = useState("");
  const [hasParketingSpace, setHasParkingSpace] = useState("");
  const [durationOfRenting, setDurationOfRenting] = useState("");
  const [numberOfPlots, setNumberOfPlots] = useState("");

  function addImages(event) {
    if (selectedImages.length == 3) {
      alert("The maximum number of images to add is 3");
      return;
    }
    setSelectedImages([...selectedImages, event.target.files[0]]);
    // setPreviewImages([
    //   ...previewImages,
    //   URL.createObjectURL(event.target.files[0]),
    // ]);
  }

  async function createPost(event) {
    event.preventDefault();
    const post = {
      category: selectedCategory,
      subcategory: selectedSubcategory,
      productTitle,
      amount,
      productDescription,
      condition,
    };
    if (
      selectedCategory === "Vehicles" ||
      selectedCategory === "Electronics" ||
      selectedCategory === "Mobile phones & Tablets"
    ) {
      post.yearOfManufacture = yearOfManufacture;
      post.model = model;
      post.nameOfManufacturer = nameOfManufacturer;
    } else if (selectedCategory === "Health & Beauty") {
      post.gender = gender;
    } else if (selectedCategory === "Property") {
      post.isFurnished = isFurnished;
      post.hasParketingSpace = hasParketingSpace;
      if (selectedSubcategory === "houses & apartments for rent") {
        post.durationOfRenting = durationOfRenting;
      }
    } else {
      post.numberOfPlots = numberOfPlots;
    }
    const imageBlobs = [];
    await Promise.all(
      selectedImages.map(async (image) => {
        const imageToBinary = await image.arrayBuffer();
        imageBlobs.push(new Uint8Array(imageToBinary));
      })
    );
    console.log(imageBlobs);
    post.images = imageBlobs;
    // console.log(post);

    // console.log(event);
  }

  return (
    <Box>
      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <Box component="form" autoComplete="off" onSubmit={createPost}>
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
                <input
                  type="file"
                  accept="image/*"
                  onChange={addImages}
                  required
                />

                <Typography>
                  Add some images. You can add up to 3 images
                </Typography>
              </Box>
            </PostImage>
            <Divider />
            <Stack direction="row" spacing={2} style={{ marginTop: "20px" }}>
              {selectedImages.map((file, index) => (
                <Box key={index} style={{ width: "200px", height: "200px" }}>
                  <img
                    src={URL.createObjectURL(file)}
                    alt="Posting preview"
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Box>
              ))}
              {/* {previewImages.map((imageUrl, index) => (
                <Box key={index} style={{ width: "200px", height: "200px" }}>
                  <img
                    src={imageUrl}
                    alt="Posting preview"
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Box>
              ))} */}
            </Stack>
          </Box>
          <Box>
            <Typography style={{ marginBottom: "10px" }}>
              Product details
            </Typography>
            <Stack spacing={2}>
              <TextField
                required
                label="Product title"
                variant="outlined"
                onChange={(e) => setProductTitle(e.target.value)}
              />
              <Box>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Amount
                </InputLabel>
                <OutlinedInput
                  style={{ width: "100%" }}
                  id="outlined-adornment-amount"
                  required
                  startAdornment={
                    <InputAdornment position="start">BTC</InputAdornment>
                  }
                  onChange={(e) => setAmount(e.target.value)}
                />
              </Box>
              <TextField
                required
                label="Product description"
                variant="outlined"
                multiline
                rows={7}
                placeholder="What other details do you want buyers to know about?"
                onChange={(e) => setProductDescription(e.target.value)}
              />
              <MultiSelect
                name="Condition"
                listOfElements={["new", "used"]}
                clickedValue={(condition) => setCondition(condition)}
              />
              {CreatePostSpecification(selectedCategory, selectedSubcategory, {
                setYearOfManufacture,
                setNameOfManufacturer,
                setModel,
                setGender,
                setIsFurnished,
                setHasParkingSpace,
                setDurationOfRenting,
                setNumberOfPlots,
              })}
            </Stack>
          </Box>
          <Button variant="contained" endIcon={<SendIcon />} type="submit">
            Create post
          </Button>
        </Box>
      )}
    </Box>
  );
}
