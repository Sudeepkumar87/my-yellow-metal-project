import { Box, Typography, Button } from "@mui/material";
import React from "react";
import one from "../../assets/festivalImages/one.png";
import two from "../../assets/festivalImages/two.png";
import three from "../../assets/festivalImages/three.png";
import four from "../../assets/festivalImages/four.png";

const FestivalImages = () => {
  return (
    <Box sx={{  paddingLeft:"1rem",marginTop:"2rem"}}>
      <Box sx={{ display: "flex", gap: "1rem", paddingLeft:"1rem",  "@media (min-width: 768px) and (max-width: 1023px)": {
        display:"block"
      }, 
        "@media (min-width: 425px) and (max-width: 767px)": {
        display:"block"
      },
      }}>
        <Box
          sx={{
            background: `url(${one}) center center / cover`,
            width: "52%",
            height: "261px",
            paddingBottom: "140px",
            "@media (min-width: 768px) and (max-width: 1023px)": {
        width:"96%",
        marginBottom:"1rem",
             },
             "@media (min-width: 425px) and (max-width: 767px)": {
             width:"99%",
             height:"107px",
             marginBottom:"1rem",
            },
          }}
        >
          <Typography
            sx={{
              paddingTop: "2rem",
              fontSize: "57px",
              color: "#000000",
              maxWidth: "421px",
              paddingLeft: "2rem",
              "@media (min-width: 425px) and (max-width: 767px)": {
            fontSize:"28px"
               },
            }}
          >
            Looking For the Perfect Gift?
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#000000",
              maxWidth: "382px",
              opacity: 1,
              paddingLeft: "2rem",
            }}
          >
            Login into your account by entering the details
          </Typography>
          <Button
            sx={{
              background: "#0D51D2 0% 0% no-repeat padding-box",
              borderRadius: "3px",
              width: "160px",
              height: "39px",
              fontSize: "14px",
              color: "#FFFFFF",
              opacity: "0.94",
              marginTop: "1rem",
              marginLeft: "2rem",
            }}
          >
            View Products
          </Button>
        </Box>
        <Box
          sx={{
            background: `url(${two}) center center / cover`,
            width: "40%",
            height: "401px",
            "@media (min-width: 768px) and (max-width: 1023px)": {
              width:"96%",
                   },
                   "@media (min-width: 425px) and (max-width: 767px)": {
                    width:"99%",
                    height:"240px",
                    marginBottom:"1rem",
                   },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "21px",
                color: "#FFC931",
                opacity: 1,
                paddingTop: "7rem",
                justifyContent: " center",
                display: "flex",
                textAlign: "center",
                "@media (min-width: 768px) and (max-width: 1023px)": {
                 display:"flex",
                 flexDirection:"column"
                       },
              }}
            >
              AKSHAYA
            </Typography>
            <Typography sx={{ color: "#FFC931", opacity: 1, fontSize: "69px"  ,     justifyContent: " center",
                display: "flex",
                textAlign: "center",}}>
              Tritiya
            </Typography>
            <Typography
              sx={{
                fontSize: "21px",
                color: "#FFFFFF",
                opacity: 1,
                maxWidth: "409px",
                justifyContent: " center",
                display: "flex",
           margin:"auto",
           "@media (min-width: 1024px) and (max-width: 1283px)": {
           maxWidth:"252px"
          },
              }}
            >
              Click to See our Akshaya Tritiya gold coin Gift optins
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: "1rem", marginTop: "1rem",paddingLeft:"1rem",  "@media (min-width: 768px) and (max-width: 1023px)": {
      flexDirection:"column"
             },
             "@media (min-width: 425px) and (max-width: 767px)": {
            
             flexDirection:"column"
             },
              }}>
        <Box
          component="img"
          src={three}
          sx={{ width: "40%", height: "325px", "@media (min-width: 768px) and (max-width: 1023px)": {
      width:"96%"
             },
             "@media (min-width: 425px) and (max-width: 767px)": {
              width:"99%",
              height:"240px",
            
             },
            
            }}
        />
        <Box
          component="img"
          src={four}
          sx={{ width: "52%", height: "325px","@media (min-width: 768px) and (max-width: 1023px)": {
      width:"96%"},
      "@media (min-width: 425px) and (max-width: 767px)": {
        width:"99%",
        height:"240px",
      
       },
     }}
        />
      </Box>
    </Box>
  );
};

export default FestivalImages;
