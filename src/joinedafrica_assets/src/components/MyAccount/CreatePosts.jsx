import React, { useContext, useState } from "react";
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
  CircularProgress,
  Snackbar,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { getCategoryNames, getsubcategory } from "../../util/ListOfCategories";
import { PostImage } from "../../styling/CreatePosts";
import { CreatePostSpecification } from "../../util/CreatePostSpecification";
import SendIcon from "@mui/icons-material/Send";
import { AppContext } from "../../context";
import { MultiSelect } from "../../util/reuseableComponents/MultiSelect";
import { Loading } from "../../util/reuseableComponents/Loading";

export default function CreatePost() {
  const [categories, setCategories] = useState(getCategoryNames());
  const { authenticatedUser } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [productTitle, setProductTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [condition, setCondition] = useState("");
  const [yearOfManufacture, setYearOfManufacture] = useState("0");
  const [nameOfManufacturer, setNameOfManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [gender, setGender] = useState("");
  const [isFurnished, setIsFurnished] = useState("");
  const [hasParkingSpace, setHasParkingSpace] = useState("");
  const [durationOfRenting, setDurationOfRenting] = useState("0");
  const [numberOfPlots, setNumberOfPlots] = useState("0");
  const [openSnackBar, setOpenSnackBar] = useState(false);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackBar(false);
  };

  function addImages(event) {
    if (selectedImages.length == 3) {
      alert("The maximum number of images to add is 3");
      return;
    }
    setSelectedImages([...selectedImages, event.target.files[0]]);
  }

  // sends the created post to the backend but the user has to be authenticated first using the internet identity
  async function createPost(event) {
    event.preventDefault();
    if (authenticatedUser == null) {
      alert("You have to log in first before you can create a post");
      return;
    }
    setIsLoading(true);
    const post = {
      creationDateOfPost: new Date().toLocaleDateString(),
      category: selectedCategory,
      subcategory: selectedSubcategory,
      productTitle,
      amount,
      productDescription,
      condition,
      productSpecification: {
        yearOfManufacture: parseInt(yearOfManufacture),
        model,
        nameOfManufacturer,
        gender,
        isFurnished: isFurnished === "yes",
        hasParkingSpace: hasParkingSpace === "yes",
        numberOfPlots: parseInt(numberOfPlots),
        durationOfRenting: parseInt(durationOfRenting),
      },
    };

    const imageBlobs = [];
    await Promise.all(
      selectedImages.map(async (image) => {
        const imageToBinary = await image.arrayBuffer();
        imageBlobs.push(new Uint8Array(imageToBinary));
      })
    );

    post.images = imageBlobs;
    await authenticatedUser.createPost(post);
    setIsLoading(false);
    setOpenSnackBar(true);
  }

  return (
    <>
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
          <Typography style={{ marginBottom: "10px" }}>Add image(s)</Typography>
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
        <Box style={{ marginTop: "40px" }}>
          <Button
            variant="outlined"
            endIcon={<SendIcon />}
            type="submit"
            disabled={isLoading}
          >
            Create post
          </Button>
        </Box>
        {Loading(isLoading)}
      </Box>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          Post has been created!
        </Alert>
      </Snackbar>
    </>
  );
}
