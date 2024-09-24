import React from "react";
import Box from "@mui/material/Box";
import { Button, Card, Typography } from "@mui/material";
import ServiceList from "../../molecules/ServiceList";

const Services = () => {
  return (
    <>
      <Box sx={{ width: "100%",marginBottom:"2rem" }}>
        <Box>
          <Typography
            sx={{
              fontSize: "62px",
              font: "normal normal medium 62px/81px Poppins",
              alignItems: "center",
              color: "#111111",
              margin: "auto",
              opacity: "1",
              maxWidth: "1104px",

              display: "flex",
              textAlign: "center",
              "@media (min-width: 1024px) and (max-width: 1259px)": {
                textAlign: "center",
                fontSize: "49px",
              },
              "@media (min-width: 425px) and (max-width: 767px)": {
                fontSize: "42px",
              },
            }}
          >
            Here’s what we do and serve in just 2 minutes!
          </Typography>
          <Typography
            sx={{
              fontSize: "24px",
              width: "983px",
              font: "normal normal normal 24px/40px Poppins",
              color: "#111111",
              opacity: "1",
              textAlign: "center",
              maxWidth: "1145px",
              margin: "auto",
              paddingBottom: "1rem",
              "@media (min-width: 768px) and (max-width: 1023px)": {
                maxWidth: "720px",
              },
              "@media (min-width: 425px) and (max-width: 767px)": {
                maxWidth: "422px",
              },
            }}
          >
            Convert your digital gold to physical gold by paying a nominal
            minting charge. Your delivery comes with free insurance, to ensure
            your coins and bars reach you safely.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: "14px",
            paddingLeft: "4rem",
            "@media (min-width: 1024px) and (max-width: 1259px)": {
              gridTemplateColumns: "1fr 1fr ",
            },
            "@media (min-width: 768px) and (max-width: 1023px)": {
              gridTemplateColumns: "1fr 1fr ",
            },
            "@media (min-width: 425px) and (max-width: 767px)": {
              gridTemplateColumns: "1fr  ",
            },

          }}
        >
          {ServiceList.map((item) => (
            <Card
              sx={{
                width: "283px",
                height: "128px",
                background: "#FFFFFF 0% 0% no-repeat padding-box",
                border: "1px solid #B4B4B4",
                borderRadius: "18px",
                opacity: "1",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  marginLeft: "1rem",
                  marginTop: "1rem",
                  gap: "1rem",
                }}
              >
                <Box
                  component="img"
                  src={item.img}
                  sx={{ width: "50px", height: "93px" }}
                />
                <Typography>{item.text}</Typography>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Services;
