import React from "react";
import { Popover } from "@mui/material/";
import PopoverCmpDetails from "./PopoverCmpDetails";

export default function PopoverCmp({
  popupPosition,
  setPopupPosition,
  isPublished,
  postId,
}) {
  return (
    <Popover
      open={Boolean(popupPosition)}
      anchorEl={popupPosition}
      onClose={() => setPopupPosition(null)}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <PopoverCmpDetails isPublished={isPublished} postId={postId} />
    </Popover>
  );
}
