import React, { useContext, useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AppContext } from "../../context";
import PopoverCmp from "./PopoverCmp";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PostingCard({
  productTitle,
  creationDateOfPost,
  image,
  productDescription,
  isPublished,
  postId,
}) {
  const { userProfile } = useContext(AppContext);

  //maximum length of characters for description and title
  const MAX_LENGTH_OF_DESCRIPTION = 150;
  const MAX_lENGTH_OF_TITLE = 25;

  const profilePictureURL = URL.createObjectURL(
    new Blob([userProfile.profilePicture], { type: "image/png" })
  );
  const [popupPosition, setPopupPosition] = useState(null);

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={<Avatar src={profilePictureURL} />}
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
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
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
