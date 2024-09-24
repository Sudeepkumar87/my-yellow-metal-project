import React from "react";
import { Button, Typography, Box, Card } from "@mui/material";
import LoginBackground from "../../assets/cardImages/LoginBackground.svg";
import CustomButton from "../../atoms/CustomButton";
const LoginYellowMetalAccount = () => {
  const background = "#0D51D2 0% 0% no-repeat padding-box";
  return (
    <Box>
    <Box   
   
    sx={{
      background: `url(${LoginBackground})   center center/cover`,
      width: "100%",
      height: "635px",
      "@media (min-width: 425px) and (max-width: 764px)": {
        height: "370px",
        },
      
      
 
    }}>
   
      <Box sx={{paddingTop:"10rem",   "@media (min-width: 425px) and (max-width: 764px)": {
          paddingTop:"3rem"
            },}}>
      <Typography
        sx={{
          display:"flex",
          textAlign:"center",
          fontSize: "71px",
     
          color: "#FFFFFF",
    
          font: "normal normal medium 71px/94px Poppins",
          "@media (min-width: 425px) and (max-width: 764px)": {
          fontSize:"40px"
          },
        }}
      >
        A few clicks away from Login into your Yellowmetals Account
      </Typography>
      <Box sx={{display:"flex",justifyContent:"center",marginTop:"1rem"}}>
    
      <Button
        sx={{
          width: "386px",
    
          height: "87px",
          background: "#0D51D2 0% 0% no-repeat padding-box",
          borderRadius: "7px",
          opacity: "1",
          fontSize: "31px",
          font: "normal normal 600 31px/43px Open Sans",
          textTransform: "none",
          color: "#FFFFFF",
          opacity: "0.94",
          "@media (min-width: 425px) and (max-width: 764px)": {
            font: "normal normal 600 20px/43px Open Sans",
            width:"184px",
            height:"53px",
            borderRadius: "49px",
            },
       
        }}
      >
        Sign Up
      </Button>
      </Box>
      </Box>
    </Box>
    </Box>
  );
};

export default LoginYellowMetalAccount;
