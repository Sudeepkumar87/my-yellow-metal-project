import React from "react";
import Home from "../../assets/WeedingImages/Home.png";
import Box from "@mui/material/Box";
import { Typography, Button } from "@mui/material";
import CustomButton from "../../atoms/CustomButton";
const HomeWeeding = () => {


  return (
    <>
      <Box
        sx={{
          background: `url(${Home}) center center / cover`,

          width: "100%",
          height: "732px",
          "@media (min-width: 1024px) and (max-width: 1283px)": {
            height: "521px",
          },
          "@media (min-width: 768px) and (max-width: 1023px)": {
            height: "391px",
          },
          "@media (min-width: 425px) and (max-width: 766px)": {
            height: "215px",
          },
        }}
      >
        <Box sx={{}}>
          <Typography
            sx={{
              fontSize: "96px",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              margin: "auto",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    width: "56%",
             
              paddingTop: "6rem",

              font: "normal normal medium 71px/94px Poppins",
              color: "#FFFFFF;",

              "@media (min-width: 1024px) and (max-width: 1283px)": {
                paddingTop: "4rem",
                fontSize: "66px",
              },
              "@media (min-width: 768px) and (max-width: 1023px)": {
                paddingTop: "2rem",
                fontSize: "55px",
                width:"67%"
              },
              "@media (min-width: 425px) and (max-width: 767px)": {
                paddingTop: "2rem",
                width:"84%",
                fontSize: "26px",
              },
            }}
          >
          Wedding gifts that brings happy tears
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            sx={{
              fontSize: "37px",
              font: "normal normal normal 30px/43px Poppins",
              color: "#FFFFFF",
              opacity: "1",

              textAlign: "center",
              paddingBottom: "2rem",

              width: "733px",
              height: "86px",
              "@media (min-width: 1024px) and (max-width: 1283px)": {
                paddingBottom: "1rem",
              },
              "@media (min-width: 768px) and (max-width: 1023px)": {
                paddingBottom: "1rem",
                  height:"52px"
              },
              "@media (min-width: 425px) and (max-width: 767px)": {
                font: "normal normal normal 18px/28px Poppins",
                paddingBottom: "0px",
                height:"33px"
              },
            }}
          >
           Let us help you pick them.
          </Typography>
        </Box>
        <Button
          sx={{
            width: "386px",
            height: "87px",
            background: "#0D51D2",
            borderRadius: "7px",
            fontSize: "28px",
            color: "#FFFFFF",
            opacity: 0.94,
            border: "none",
            display: "flex",
            margin: "auto",
            textTransform: "none",
            "@media (min-width: 768px) and (max-width: 1023px)": {
              width: "208px",
              height: "54px",
              fontSize: "21px",
           
            },
            "@media (min-width: 425px) and (max-width: 500px)": {
              width: "158px !important",
              height: "48px !important",
              fontSize: "17px !important",
              borderRadius: "29px",
            },
          }}
        >
          View Products
        </Button>
        {/* <Box
          sx={{
            paddingTop: "2rem",
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <CustomButton
            width={WidthProps()}
            buttonName=" View Products"
            background="#0D51D2 0% 0% no-repeat padding-box"
          />
        </Box> */}
      </Box>
    </>
  );
};

export default HomeWeeding;
