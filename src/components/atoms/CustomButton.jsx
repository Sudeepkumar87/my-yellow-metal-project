import React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";


const CustomButton = (props) => {
  const { buttonName, background ,WidthProps} = props;
  return (
    <Box>
      <Button
        style={{
          width: WidthProps?WidthProps:"100px",
          height: "87px",
          background: background,
          borderRadius: "7px",
          opacity: "1",
          border: "none",
            textTransform: "none",
            fontSize: "28px",
               color: "#FFFFFF",
        }}
      >
        {buttonName}
      </Button>
    </Box>
  );
};

export default CustomButton;
