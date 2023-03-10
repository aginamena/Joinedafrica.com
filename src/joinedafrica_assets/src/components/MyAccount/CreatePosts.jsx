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
} from "@mui/material";
import { getCategoryNames, getsubcategory } from "../../util/ListOfCategories";
import { PostImage } from "../../styling/CreatePosts";
import { CreatePostSpecification } from "../../util/CreatePostSpecification";
import SendIcon from "@mui/icons-material/Send";
import { AppContext } from "../../context";
import { MultiSelect } from "../../util/reuseableComponents/MultiSelect";
import { LoadingCmp } from "../../util/reuseableComponents/LoadingCmp";
import { joinedafrica } from "../../../../declarations/joinedafrica/index";

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

  //maximum length of characters and number of images
  const MAXIMUM_NUMBER_OF_IMAGES = 3;
  const MAX_LENGTH_OF_DESCRIPTION = 150;

  function addImages(event) {
    if (selectedImages.length == MAXIMUM_NUMBER_OF_IMAGES) {
      alert("The maximum number of images to add is 3");
      return;
    }
    setSelectedImages([...selectedImages, event.target.files[0]]);
  }
  function createProductSpecification() {
    if (selectedCategory == "Vehicles") {
      return {
        Vehicles: {
          Year_of_manufacture: parseInt(yearOfManufacture),
          Name_of_manufacturer: nameOfManufacturer,
          Model: model,
        },
      };
    } else if (selectedCategory == "Electronics") {
      return {
        Electronics: {
          Year_of_manufacture: parseInt(yearOfManufacture),
          Name_of_manufacturer: nameOfManufacturer,
          Model: model,
        },
      };
    } else if (selectedCategory == "Health_and_beauty") {
      return {
        Health_and_beauty: {
          Gender: gender,
        },
      };
    } else if (selectedCategory == "Mobile_phones_and_tablets") {
      return {
        Mobile_phones_and_tablets: {
          Year_of_manufacture: parseInt(yearOfManufacture),
          Name_of_manufacturer: nameOfManufacturer,
          Model: model,
        },
      };
    } else if (selectedCategory == "Fashion") {
      return {
        Fashion: {
          Gender: gender,
        },
      };
    } else if (selectedCategory == "Properties") {
      if (selectedSubcategory == "Houses_and_apartments_for_rent") {
        return {
          Properties: {
            Houses_and_apartments_for_rent: {
              Furnished: isFurnished,
              Parking_space: hasParkingSpace,
              Duration_of_rent_in_months: parseInt(durationOfRenting),
            },
          },
        };
      }
      if (selectedSubcategory == "Houses_and_apartments_for_sale") {
        return {
          Properties: {
            Houses_and_apartments_for_sale: {
              Furnished: isFurnished,
              Parking_space: hasParkingSpace,
            },
          },
        };
      } else {
        return {
          Properties: {
            Land_and_plots_for_sale: parseInt(numberOfPlots),
          },
        };
      }
    }
  }
  // sends the created post to the backend but the user has to be authenticated first using the internet identity
  async function createPost(event) {
    event.preventDefault();
    if (authenticatedUser == null) {
      alert("You have to log in first before you can create a post");
      return;
    }
    if (productDescription.length < MAX_LENGTH_OF_DESCRIPTION) {
      alert("Product description should be more than 149 characters");
      return;
    }
    setIsLoading(true);
    const post = {
      creationDateOfPost: new Date().toLocaleDateString(),
      category: selectedCategory,
      postId: Math.random().toString(16).slice(2),
      subcategory: selectedSubcategory,
      productTitle,
      isPublished: false,
      amount,
      productDescription,
      condition,
      productSpecification: {
        ...createProductSpecification(),
      },
    };

    //converting the images to blobs
    const imageBlobs = [];
    await Promise.all(
      selectedImages.map(async (image) => {
        const imageToBinary = await image.arrayBuffer();
        imageBlobs.push(new Uint8Array(imageToBinary));
      })
    );

    post.images = imageBlobs;
    process.env.NODE_ENV == "development"
      ? await joinedafrica.createPost(post)
      : await authenticatedUser.createPost(post);
    setIsLoading(false);
    alert("Your post has been created!");
    //go to my postings page
  }

  return (
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
              accept="image/jpeg, image/png"
              onChange={addImages}
              required
            />

            <Typography>
              Add some images. You can add up to 3 images. Jpeg or Png only.
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
            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
            <OutlinedInput
              style={{ width: "100%" }}
              id="outlined-adornment-amount"
              required
              type="number"
              inputProps={{ min: "0", step: "any" }}
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
      {isLoading && LoadingCmp(isLoading)}
    </Box>
  );
}
