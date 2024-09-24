import React from "react";
import { Button, Card, Typography, Box } from "@mui/material";
import video1 from "../../assets/festivalImages/video1.png";
import video2 from "../../assets/festivalImages/video2.png";
import video3 from "../../assets/festivalImages/video3.png";
import playvideo from "../../assets/festivalImages/playvideo.png";
const Video = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          marginLeft: "1rem",
          marginBottom:"1rem",
          "@media (min-width: 1024px) and (max-width: 1283px)": {
            display: "block",
            marginRight:"10px",
            marginLeft:"10px",
           
          },
          "@media (min-width: 768px) and (max-width: 1023px)": {
            display: "block",
            marginRight:"10px",
            marginLeft:"10px",
           
          },
          "@media (min-width: 425px) and (max-width: 767px)": {
            display: "block",
            marginRight:"10px",
            marginLeft:"10px",
           
          },
        }}
      >
        <Box
          sx={{
            background: `url(${video1}) center center / cover`,
            height: "783px",
            width: "50%",
            "@media (min-width: 1024px) and (max-width: 1283px)": {
              width: "100%",
              marginBottom:"10px"
            },
            "@media (min-width: 768px) and (max-width: 1023px)": {
              width: "100%",
              marginBottom:"10px"
            },
            "@media (min-width: 425px) and (max-width: 767px)": {
              width: "100%",
              marginBottom:"10px"
            },
          }}
        >
          <Box>
            <Box>
              <Typography
                sx={{
                  paddingTop: "250px",
                  color: "#FFFFFF",
                  fontSize: "51px",
                  paddingLeft: "1rem",
                  paddingBottom: "2rem",
                }}
              >
                Here’s what we do and serve in just 2 minutes!
              </Typography>
              <Typography
                sx={{
                  color: "#FFFFFF",
                  paddingLeft: "1rem",
                  fontSize: "21px",
                  width: "92%",
                }}
              >
                Convert your digital gold to physical gold by paying a nominal
                minting charge. Your delivery comes with free insurance, to
                ensure your coins and bars reach you safely.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  paddingLeft: "1rem",
                }}
              >
                <Box component="img" src={playvideo} sx={{ width: "7%" }} />
                <Typography sx={{ color: "#FFFFFF" }}>Watch Video</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "13px", }}>
          <Box
            sx={{
              background: `url(${video2}) center center / cover`,
              height: "385px",
              width: "224%",
              "@media (min-width: 1024px) and (max-width: 1283px)": {
                width: "100%",
              },
              "@media (min-width: 768px) and (max-width: 1023px)": {
                width: "100%",
              },
              "@media (min-width: 425px) and (max-width: 767px)": {
                width: "100%",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "1rem",
                paddingTop: "140px",
                gap: "10px",
              }}
            >
              <Box component="img" src={playvideo} sx={{ width: "8%" }} />
              <Typography sx={{ color: "#FFFFFF", fontSize: "32px" }}>
                Watch Video
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              background: `url(${video3}) center center / cover`,
              height: "385px",
              width: "224%",
              "@media (min-width: 1024px) and (max-width: 1283px)": {
                width: "100%",
              },
              "@media (min-width: 768px) and (max-width: 1023px)": {
                width: "100%",
              },
              "@media (min-width: 425px) and (max-width: 767px)": {
                width: "100%",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "1rem",
                paddingTop: "140px",
              }}
            >
              <Box component="img" src={playvideo} sx={{ width: "8%" }} />
              <Typography sx={{ color: "#FFFFFF", fontSize: "32px" }}>
                Watch Video
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Video;
