import React from "react";
import { Typography, Button, Box, Card } from "@mui/material";
import CoinItem from "../../molecules/CoinItem";

const BalajiCoin = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          width: "97%",
          gap: "2rem",
          marginLeft: "1rem",
          marginRight: "1rem",
        }}
      >
        {CoinItem.map((item) => (
          <Card
            sx={{
              background: "#FFFFFF 0% 0% no-repeat padding-box",
              border: "1px solid #70707069",
              borderRadius: "17px",
              opacity: 1,
              width:"100%",
          
              paddingLeft:"10px",
              paddingRight:"10px",
            

            }}
          >
            <div
              style={{
                display: "flex",
                // textAlign: "center",
                // alignItems: "center",
                // justifyContent: "space-between",
                paddingTop: "13px",
                  paddingBottom:"2rem"
              }}
            >
              <Box>
                <Box
                  sx={{
                    background: "#FF5C53 0% 0% no-repeat padding-box",
                    height: "79px",
                    borderRadius: "80px",
                    width: "79px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "24px",
                      color: "#FFFFFF",
                      flexDirection: "column",
                      alignItems: "center",
                      display: "flex",
                      paddingTop: "12px",
                    }}
                  >
                    30%
                    <Box component="span" sx={{ fontSize: "12px !important" }}>
                      OFF
                    </Box>
                  </Typography>
                </Box>
              </Box>
              <Box component="img" src={item.img} sx={{ width: "52%" }} />
              <Box
                sx={{
                  background: "#4562DB 0% 0% no-repeat padding-box",
                  height: "79px",
                  borderRadius: "80px",
                  width: "79px",
                }}
              >
                <Box
                  component="img"
                  src={item.img1}
                  sx={{ paddingTop: "27px", width: "30px", height: "28px",paddingLeft:"1.5rem" }}
                />
              </Box>
          

           
            </div>
            <Box sx={{ display: "flex",gap:"6px" }}>
              <Typography
                sx={{ fontSize: "49px", color: "#000000", fontWeight: "bold" }}
              >
                1,09,179
              </Typography>
              <Button
                sx={{
                  width: "169px",
                  height: "66px",
                  background: "#EAF2FF 0% 0% no-repeat padding-box",
                  borderRadius: "102px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    gap: "2rem",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "25px",
                      color: "#4562DB",
                      textTransform: "none",
                      fontWeight: "bold",
                    }}
                  >
                    {item.button}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "25px",
                      color: "#4562DB",
                      textTransform: "none",
                      fontWeight: "bold",
                    }}
                  >
                    +
                  </Typography>
                </Box>
              </Button>
            </Box>
            <Typography sx={{ fontSize: "23px", color: "#000000",whiteSpace:"nowrap" }}>
              {item.text}
            </Typography>
            <Box sx={{ display: "flex" ,gap:"10px"}}>
              <Button
                sx={{
                  background: "#4562DB 0% 0% no-repeat padding-box",
                  borderRadius: "9px",
                  fontSize: "15px",
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  whiteSpace: "nowrap",
                }}
              >
                {item.btn}
              </Button>
              <Button
                sx={{
                  background: "#4562DB 0% 0% no-repeat padding-box",
                  borderRadius: "9px",
                  fontSize: "15px",
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  whiteSpace: "nowrap",
                }}
              >
                {item.btn1}
              </Button>
              <Button
                sx={{
                  background: "#4562DB 0% 0% no-repeat padding-box",
                  borderRadius: "9px",
                  fontSize: "15px",
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  whiteSpace: "nowrap",
                }}
              >
                {item.btn2}
              </Button>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default BalajiCoin;
