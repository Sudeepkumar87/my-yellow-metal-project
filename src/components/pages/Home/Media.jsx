import { Box } from "@mui/material";
import React from "react";
import mediaImages from "../../molecules/mediaList";

const Media = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
        gap: "10px",
        marginRight: "10px",
        marginLeft: "10px",
        "@media (min-width: 1024px) and (max-width: 1439px)": {
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
        },
        "@media (min-width: 768px) and (max-width: 1023px)": {
          gridTemplateColumns: "1fr 1fr 1fr ",
        },
        "@media (min-width: 425px) and (max-width: 767px)": {
          gridTemplateColumns: "1fr 1fr  ",
        },
        "@media (min-width: 375px) and (max-width: 424px)": {
          gridTemplateColumns: "1fr ",
          gap:"1px"
        },
      }}
    >
      {mediaImages.map((item) => (
        <Box>
          <Box
            component="img"
            src={item}
            sx={{
              width: "220px",
              aspectRatio: 3 / 2,
              objectFit: "contain",
              "@media (min-width: 425px) and (max-width: 767px)": {
                width: "131px",
              },
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default Media;
