import React from "react";
import { Button, Typography, Box, Card } from "@mui/material";
import digitalList from "../../molecules/CardList";
const DigitalTransaction = () => {
  return (
      <Box>
    <Box
      sx={{
      
     marginBottom:"1rem",
        width: "100%",
        height:"auto",
        display: "flex",
        gap: "10px",
        paddingTop: "7rem",
        "@media (min-width: 1024px) and (max-width: 1439px)": {
          display:"block",
          paddingTop:"1rem"
         
          
        
        },
        "@media (min-width: 768px) and (max-width: 1023px)": {
           display:"block",
           paddingTop: "1rem",
           },
           "@media (min-width: 425px) and (max-width: 764px)": {
         paddingTop:"1rem",
            },
          //  "@media (min-width: 768px) and (max-width: 1023px)": {
          //   fontSize: "29px",
          // },
          "@media (min-width: 425px) and (max-width: 767px)": {
          display:"block"
          },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", margin: "auto" }}>
        <Typography
          sx={{
            marginBottom: "45px",
            color: "#000000",
            opacity: 1,
            fontSize: "102px",
            font: "normal normal 600 62px/80px Poppins",
            "@media (min-width: 1024px) and (max-width: 1439px)": {
             textAlign:"center",
             marginBottom: "5px",
            },
            "@media (min-width: 768px) and (max-width: 1023px)": {
               textAlign:"center",
               marginBottom:"7px"
              },
              "@media (min-width: 425px) and (max-width: 767px)": {
                font: "normal normal 600 52px/80px Poppins",
                 textAlign:"center",
                 marginBottom:"7px"
                },
          }}
        >
          Why go digital?
        </Typography>

        <Typography
          sx={{
            fontSize: "26px",
            font: "normal normal normal 26px/49px Poppins",
      flexWrap:"wrap !important",
      width:"50%",
            height: "85px",
            marginBottom: "2rem",
            width:"95%",

            color: "#000000",
            opacity: "1",
            "@media (min-width: 1024px) and (max-width: 1439px)": {
              textAlign:"center",
              height: "24px",
             
             },
             "@media (min-width: 768px) and (max-width: 1023px)": {
              textAlign:"center"
             },
             "@media (min-width: 425px) and (max-width: 767px)": {
             paddingBottom:"2rem",
             textAlign:"center",
             marginLeft:"1rem"
              },
          }}
        >
          2,768 Transactions in the last 1 hour Start investing in gold starting
          as low as ₹10
        </Typography>
        <Button
          sx={{
            background: "#0D51D2 0% 0% no-repeat padding-box",
            borderRadius: "7px",
            opacity: "1",
            fontSize: "28px",
            font: "normal normal 600 28px/43px Open Sans",
            textTransform: "none",
            color: "#FFFFFF",
            opacity: "0.94",
            width: "355px",
            height: "87px",
            border: "none",
            "@media (min-width: 1024px) and (max-width: 1439px)": {
            margin:"auto"
             },
             "@media (min-width: 768px) and (max-width: 1023px)": {
              margin:"auto"
             },
             "@media (min-width: 425px) and (max-width: 767px)": {
                margin:"auto",
                borderRadius: "27px",
                width:"215px",
                height:"68px",
                font: "normal normal 600 21px/43px Open Sans",
               },
          }}
          
        >
          View Products
        </Button>
      </Box>
      <Box
        sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" , paddingLeft:"2rem",   "@media (min-width: 768px) and (max-width: 1023px)": {
       
         },
           "@media (min-width: 1024px) and (max-width: 1439px)": {
            marginLeft:"5rem",
          marginTop:"1rem"
         

           },
           "@media (min-width: 768px) and (max-width: 1023px)": {
             marginTop:"1rem",
                paddingLeft:"10px"
           },
           "@media (min-width: 425px) and (max-width: 767px)": {
             marginTop:"1rem",
             display:"block",
             paddingLeft:"1rem"
           },
          }}
      >
        {digitalList.map((item) => (
          <Card
            sx={{
               width: "417px",
              height: "345px",
              background: "#FFFFFF 0% 0% no-repeat padding-box",
              border: "1px solid #70707045",
              borderRadius: "10px",
              opacity: "1",
              paddingRight: "8px",
              "@media (min-width: 768px) and (max-width: 1023px)": {
                width: "356px",
              },
              "@media (min-width: 425px) and (max-width: 767px)": {
             width:"391px",
             height:"auto",
             marginBottom:"10px"
              },
          
            }}
          >
            <Box
              sx={{
                  width: "107px",
                height: "93px",
                background: "#F2F8FE 0% 0% no-repeat padding-box",
                borderRadius: "7px",
                opacity: "1",
                position: "relative",
                justifyContent: "center",
                display: "flex",
                marginTop: "35px",
                marginLeft: "45px",
              }}
            >
              <Box
                component="img"
                src={item.img}
                sx={{
                  width: "54px",
                  height: "54px",
                  bottom: "1rem",
                  position: "absolute",
                }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: "37px",
                font: "normal normal medium 37px/94px Poppins",
                paddingTop: "2rem",
                marginLeft: "14px",

                color: "#000000",
                opacity: "1",
                "@media (min-width: 768px) and (max-width: 1023px)": {
                  fontSize: "29px",
                },
                "@media (min-width: 425px) and (max-width: 767px)": {
                
                   },
              }}
            >
              {item.head}
            </Typography>
            <Typography
              sx={{
                fontSize: "24px",
                font: "normal normal normal 24px/40px Poppins",
                marginLeft: "13px",
                 width: "524px",
                height: "73px",
                flexWrap:"wrap !important",
                width:"95%",

                color: "#000000",
                opacity: "1",
                "@media (min-width: 425px) and (max-width: 767px)": {
                  width:"100%",
                },
              }}
            >
              {item.text}
            </Typography>
          </Card>
        ))}
      </Box>
    </Box>
    </Box>
  );
};

export default DigitalTransaction;
