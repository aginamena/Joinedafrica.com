import React, { useEffect, useState, useContext } from "react";
import { Container, Stack, Box, Typography } from "@mui/material";
import { AppContext } from "../../context";
import { joinedafrica } from "../../../../declarations/joinedafrica/index";
import { useParams } from "react-router";
import Header from "../appStructure/Header";
import { LoadingCmp } from "../../util/reuseableComponents/LoadingCmp";
import CarouselCmp from "../../util/reuseableComponents/CarouselCmp";
import { extractProductSpecification } from "../../util/functions";

export default function ViewPost() {
  const [post, setPost] = useState({});
  const { authenticatedUser } = useContext(AppContext);
  const { postId } = useParams();
  const [loading, setLoading] = useState(false);
  const [postImages, setPostImages] = useState([]);
  const [productSpecification, setProductSpecification] = useState({});

  useEffect(() => {
    async function getPost() {
      let response;
      setLoading(true);
      if (process.env.NODE_ENV != "development") {
        response = await authenticatedUser.getPost(postId);
        setPost(response[0]);
      } else {
        //the user might not be authenticated but may want to call getPost method
        response = await joinedafrica.getPost(postId);
        setPost(response[0]);
      }
      const images = [];
      response[0].images.forEach((image) => {
        //converting the unit8array image bytes array back to an image file
        const imageUrl = URL.createObjectURL(
          new Blob([image], { type: "image/png" })
        );
        images.push(imageUrl);
      });
      setPostImages(images);
      setProductSpecification(extractProductSpecification(response[0]));
      setLoading(false);
    }
    getPost();
  }, []);

  return (
    <Box>
      <Header />
      <Container
        style={{
          marginBottom: "100px",
          marginTop: "100px",
        }}
      >
        {loading ? (
          LoadingCmp(loading)
        ) : (
          <>
            <Stack direction="row">
              {/* right component */}
              <Box style={{ width: "600px" }}>
                <CarouselCmp images={postImages} />
                <Box style={{ margin: "30px 0" }}>
                  <Box style={{ marginBottom: "20px" }}>
                    <Typography gutterBottom>{post.productTitle}</Typography>
                    <Typography style={{ color: "#37a864" }}>
                      {post.amount} BTC
                    </Typography>
                  </Box>

                  {Object.entries(productSpecification).map(
                    ([specification, value], index) => (
                      <Box
                        style={{
                          display: "flex",
                          color: "rgba(255, 255, 255, 0.7)",
                        }}
                        key={index}
                      >
                        <Typography style={{ marginRight: "10px" }}>
                          {specification.replaceAll("_", " ")} :
                        </Typography>
                        <Typography>{value.toString()}</Typography>
                      </Box>
                    )
                  )}
                  <Box
                    style={{
                      display: "flex",
                      color: "rgba(255, 255, 255, 0.7)",
                    }}
                  >
                    <Typography style={{ marginRight: "10px" }}>
                      Condition :
                    </Typography>
                    <Typography> {post.condition}</Typography>
                  </Box>
                  <Box>
                    <Typography variant="h6" style={{ margin: "20px 0" }}>
                      Description
                    </Typography>
                    <Typography>{post.productDescription}</Typography>
                  </Box>
                </Box>
              </Box>
              {/* left component */}
              <Box></Box>
            </Stack>
          </>
        )}
      </Container>
    </Box>
  );
}
