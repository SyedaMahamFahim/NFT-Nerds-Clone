import React from "react";
import { Box } from "@mui/material";
const ImageBox = ({imgSrc}) => {
  return (
    <>
      <Box
        component="img"
        sx={{
        width:"80%"
        }}
        alt="The house from the offer."
        src={imgSrc}
      />
    </>
  );
};

export default ImageBox;
