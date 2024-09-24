import React from "react";
import Home from "../../assets/navImages/Home.svg";
import Box from "@mui/material/Box";
import { Typography, Button } from "@mui/material";
import CustomButton from "../../atoms/CustomButton";
const HomeBackground = () => {
  const WidthProps = () => {
    if ("@media (min-width: 1440px) and (max-width: 2559px)") {
      return "386px";
    } else if ("@media (min-width: 1024px) and (max-width: 1439px)") {
      return "252px";
    }
  };

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
              fontSize: "71px",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              margin: "12px",
              paddingTop: "2rem",

              font: "normal normal medium 71px/94px Poppins",
              color: "#000000",

              "@media (min-width: 1024px) and (max-width: 1283px)": {
                textAlign: "center",
                fontSize: "47px",
                paddingTop: "2rem",
              },
              "@media (min-width: 768px) and (max-width: 1023px)": {
                textAlign: "center",
                fontSize: "41px",
                paddingTop: "2rem",
                margin: "10px",
              },
              "@media (min-width: 425px) and (max-width: 767px)": {
                fontSize: "21px",
                margin: "3px",
                paddingTop: "14px",
              },
            }}
          >
            A few clicks away from Login into your
            <span style={{ color: "#0D51D2" }}>Yellowmetals Account</span>{" "}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            sx={{
              fontSize: "30px",
              font: "normal normal normal 30px/43px Poppins",
              color: "#000000",
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
              },
              "@media (min-width: 425px) and (max-width: 767px)": {
                font: "normal normal normal 18px/28px Poppins",
                paddingBottom: "0px",
                height:"59px"
              },
            }}
          >
            2,768 Transactions in the last 1 hour Start investing in gold
            starting as low as ₹10
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

export default HomeBackground;
