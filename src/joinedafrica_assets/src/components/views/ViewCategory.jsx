import React, { useEffect, useState } from "react";
import { Box, Stack, Container, Typography, Button } from "@mui/material";
import FilterByCategory from "../FilterByCategory";
import { joinedafrica } from "../../../../declarations/joinedafrica/index";
import { useParams } from "react-router-dom";
import Header from "../Header";

export default function ViewCategory() {
  const { categoryName } = useParams();
  const [loading, setLoading] = useState(false);

  const [subCategory, setSubCategory] = useState([]);
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    async function getPostings() {
      setLoading(true);
      const postings = await joinedafrica.get_all_subcategory_to_a_category(
        categoryName
      );
      const subCategoryNames = [];
      for (let i = 0; i < postings.length; i++) {
        subCategoryNames.push(postings[i].name);
      }
      console.log(subCategoryNames);
      setSubCategory(subCategoryNames);
      setLoading(false);
    }
    getPostings();
  }, []);
  return (
    <>
      <Container sx={{ marginTop: "30px" }}>
        <Stack direction="row" spacing={5}>
          <FilterByCategory />
          <Box>
            {loading ? (
              <Typography variant="h6">Loading...</Typography>
            ) : (
              <Box>
                <Stack direction="row" spacing={3}>
                  {subCategory.map((name, index) => (
                    <Button variant="contained" key={index}>
                      {name}
                    </Button>
                  ))}
                </Stack>
              </Box>
            )}
          </Box>
        </Stack>
      </Container>
    </>
  );
}
