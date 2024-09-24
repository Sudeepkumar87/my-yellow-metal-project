import React from "react";
import { Button, Typography, Box, Card } from "@mui/material";
import Group from "../../assets/cardImages/Group.svg";
import quote from "../../assets/cardImages/quote.png";

const CustomerFeedback = () => {
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "1fr 1fr",
          "@media (min-width: 768px) and (max-width: 998px)": {
            gridTemplateColumns: "1fr",
          },
          "@media (min-width: 425px) and (max-width: 600px)": {
            gridTemplateColumns: "1fr",
          },
        }}
      >
        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
            marginLeft: "50px",

            flexDirection: "column",
            "@media (min-width: 425px) and (max-width: 600px)": {
              marginLeft: "20px",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "54px",

              height: "147px",
              marginBottom: "76px",
              "@media (min-width: 1024px) and (max-width: 1390px)": {
                fontSize: "49px",
              },
              "@media (min-width: 768px) and (max-width: 998px)": {
                textAlign: "center",
                marginBottom: "0rem",
              },
              "@media (min-width: 425px) and (max-width: 600px)": {
                fontSize: "36px",
                marginBottom: "0rem",
              },
            }}
          >
            Check what our client Says about us
          </Typography>
          <Box
            component="img"
            src={quote}
            sx={{
              width: "84px",
              height: "72px",
              "@media (min-width: 425px) and (max-width: 600px)": {
                display: "none",
              },
            }}
          />
          <Typography
            sx={{
              fontSize: "24px",
              marginTop: "51px",

              marginBottom: "50px",
              "@media (min-width: 425px) and (max-width: 600px)": {
                marginTop: "0px",
                marginRight: "10px",
              },
            }}
          >
            I was looking to buy Gold/Silver coins & bars to buy on festivals
            season in Deepawali with quickest delivery. I found Yellowmetals.in
            as one of the most adorable site to get it during very high
            demanding festivals seasons.
          </Typography>
          <Typography
            sx={{
              fontSize: "32px",
              font: "normal normal 600 32px/40px Poppins",

              color: "#FF5C53",
              opacity: "0.85",
            }}
          >
            Mr Sachindra Pandey
          </Typography>
          <Typography sx={{ fontSize: "24px", marginBottom: "9px" }}>
            Customer
          </Typography>
        </Box>
        <Box>
          <Box
            component="img"
            src={Group}
            sx={{
              width: "100%",
            
              "@media (min-width: 1024px) and (max-width: 14390px)": {},
              "@media (min-width: 425px) and (max-width: 600px)": {
                display: "none",
              },
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default CustomerFeedback;
