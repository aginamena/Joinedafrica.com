import React, { useEffect, useState, useContext } from "react";
import { Container, Stack, Box } from "@mui/material";
import { AppContext } from "../../context";
import { joinedafrica } from "../../../../declarations/joinedafrica/index";
import { useParams } from "react-router";
import Header from "../appStructure/Header";
import { LoadingCmp } from "../../util/reuseableComponents/LoadingCmp";
import CarouselCmp from "../../util/reuseableComponents/CarouselCmp";

export default function ViewPost() {
  const [post, setPost] = useState(null);
  const { authenticatedUser } = useContext(AppContext);
  const { postId } = useParams();
  const [loading, setLoading] = useState(false);
  const [postImages, setPostImages] = useState([]);

  // const postImages = [];
  // useEffect(() => {
  //   async function getPost() {
  //     setLoading(true);
  //     if (!post) {
  //       // if the user is authenticated using internet identity then we use that actor to call the getPost method
  //       if (process.env.NODE_ENV != "development") {
  //         setPost(await authenticatedUser.getPost(postId));
  //       } else {
  //         //the user might not be authenticated but may want to call getPost method
  //         setPost(await joinedafrica.getPost(postId));
  //       }
  //     } else {
  //       post &&
  //         post?.images.forEach((image) => {
  //           //converting the unit8array image bytes array back to an image file
  //           const imageUrl = URL.createObjectURL(
  //             new Blob([image], { type: "image/png" })
  //           );
  //           setPostImages(...postImages, {
  //             original: imageUrl,
  //             thumbnail: imageUrl,
  //           });
  //         });
  //       console.log(postImages);
  //     }

  //     setLoading(false);
  //   }
  //   getPost();
  // }, [post]);

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
      response[0].images.forEach((image) => {
        //converting the unit8array image bytes array back to an image file
        const imageUrl = URL.createObjectURL(
          new Blob([image], { type: "image/png" })
        );
        setPostImages([...postImages, imageUrl]);
      });

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
            <Stack direction="row" sx={{ justifyContent: "center" }}>
              {/* right component */}
              <Box>
                <CarouselCmp images={postImages} />
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
