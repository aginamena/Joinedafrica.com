import React, { useEffect, useState, useContext } from "react";
import { Container } from "@mui/material";
import { AppContext } from "../../context";
import { joinedafrica } from "../../../../declarations/joinedafrica/index";
import { useParams } from "react-router";
import Header from "../appStructure/Header";

export default function ViewPost() {
  const [post, setPost] = useState(null);
  const { authenticatedUser } = useContext(AppContext);
  const { postId } = useParams();
  useEffect(() => {
    async function getPost() {
      // if the user is authenticated using internet identity then we use that actor to call the getPost method
      if (authenticatedUser) {
        setPost(await authenticatedUser.getPost(postId));
      } else {
        //the user might not be authenticated but may want to call getPost method
        setPost(await joinedafrica.getPost(postId));
      }
    }
    getPost();
  }, []);
  return <>
  <Header />
    <Container>asdfasdfasdf</Container>
  </>

}
