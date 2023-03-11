import React, { useContext, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AppContext } from "../../context";
import PopoverCmp from "./PopoverCmp";
import {
  Divider,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";

export default function PostingCard({
  productTitle,
  creationDateOfPost,
  image,
  productDescription,
  isPublished,
  postId,
  amount,
}) {
  const { userProfile } = useContext(AppContext);

  //maximum length of characters for description and title
  const MAX_LENGTH_OF_DESCRIPTION = 150;
  const MAX_lENGTH_OF_TITLE = 25;

  const [popupPosition, setPopupPosition] = useState(null);

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={<Avatar src={userProfile.profilePicture} />}
          action={
            <IconButton
              onClick={(event) => setPopupPosition(event.currentTarget)}
            >
              <MoreVertIcon />
            </IconButton>
          }
          title={
            productTitle.length > MAX_lENGTH_OF_TITLE
              ? productTitle.substring(0, MAX_lENGTH_OF_TITLE) + "..."
              : productTitle
          }
          subheader={"Posted at " + creationDateOfPost}
        />
        <CardMedia
          component="img"
          height="194"
          image={URL.createObjectURL(
            new Blob([image.buffer], { type: "image/png" })
          )}
          alt="User created posting"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {productDescription.length > MAX_LENGTH_OF_DESCRIPTION
              ? productDescription.substring(0, MAX_LENGTH_OF_DESCRIPTION) +
                "..."
              : productDescription}
          </Typography>
        </CardContent>
        <Divider />
        <Typography style={{ color: "#37a864", padding: "10px" }}>
          {amount} BTC
        </Typography>
      </Card>
      <PopoverCmp
        setPopupPosition={setPopupPosition}
        popupPosition={popupPosition}
        isPublished={isPublished}
        postId={postId}
      />
    </>
  );
}
