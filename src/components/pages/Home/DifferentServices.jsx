import { Box, Typography } from "@mui/material";
import React from "react";
import one from "../../assets/differentServiceImages/one.png";
import two from "../../assets/differentServiceImages/two.png";
import three from "../../assets/differentServiceImages/three.png";
const DifferentServices = () => {
  return (
    <>
      <Box>
        <Box component="img" src={one} />
        <Box>
            <Typography>Here’s what we do and serve in just 2 minutes!</Typography>
            <Typography>Convert your digital gold to physical gold by paying a nominal minting charge. Your delivery comes with free insurance, to ensure your coins and bars reach you safely.</Typography>
        </Box>
        <Box>
            
        </Box>
      </Box>
    </>
  );
};

export default DifferentServices;
