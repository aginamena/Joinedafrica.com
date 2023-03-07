import React, { useContext, useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { AppContext } from "../../context";
import { LoadingCmp } from "../../util/reuseableComponents/LoadingCmp";
import PostingCard from "../../util/reuseableComponents/PostingCard";
import { joinedafrica } from "../../../../declarations/joinedafrica/index";
export default function MyPostings() {
  const [isLoading, setIsLoading] = useState(false);
  const { authenticatedUser } = useContext(AppContext);
  const [myPostings, setMyPostings] = useState([]);
  useEffect(() => {
    async function getAllMyPostings() {
      setIsLoading(true);
      if (process.env.NODE_ENV == "development") {
        setMyPostings(await joinedafrica.getAllMyPostings());
      } else {
        setMyPostings(await authenticatedUser.getAllMyPostings());
      }
      setIsLoading(false);
    }
    getAllMyPostings();
  }, []);
  return (
    <>
      {!isLoading && (
        <Box>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {myPostings.map((posting, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <PostingCard
                  productTitle={posting.productTitle}
                  creationDateOfPost={posting.creationDateOfPost}
                  image={posting.images[0]}
                  productDescription={posting.productDescription}
                  isPublished={posting.isPublished}
                  postId={posting.postId}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {isLoading && LoadingCmp(isLoading)}
    </>
  );
}
