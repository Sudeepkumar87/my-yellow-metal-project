import React, { useRef, useState } from "react";
import { Button, Typography, Box, Card } from "@mui/material";
import phone from "../../assets/cardImages/phone.svg";
import corporate from "../../assets/cardImages/corporate.svg";
import Phone from "../../atoms/Phone";
import { PostGetAPi } from "../../../reducer/api/GetApiAction.js";
import { useSelector, useDispatch } from "react-redux";
const PriceAlert = () => {
  const dispatch = useDispatch();
  const phoneRef = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid]=useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const isValid = validatePhoneNumber(phoneNumber);
    setValid(!isValid)
    if(isValid){
      const response = dispatch(PostGetAPi({ phone: phoneNumber }));
    }
   

  };
  const validatePhoneNumber =(phoneNumber)=>{
    const phoneNumberPattern = /^[0-9]{10}$/;
    return phoneNumberPattern.test(phoneNumber)
  }
  console.log("phoneNumber",phoneNumber)
  return (
    <Box
      sx={{
        background: `url(${phone})   center center/cover`,
        width: "100%",
        height: "547px",
        "@media (min-width: 1024px) and (max-width: 1283px)": {
          height: "439px",
          marginBottom: "2rem",
        },
        "@media (min-width: 768px) and (max-width: 1021px)": {
          height: "auto",
          marginBottom: "2rem",
        },
      }}
    >
      <Box>
        <Box
          sx={{
            paddingLeft: "3rem",
            paddingTop: "5rem",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            "@media (min-width: 768px) and (max-width: 1021px)": {
              paddingTop: "2rem",
            },
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Box
              component="img"
              src={corporate}
              sx={{
                width: "79px",
                height: "90px",
                "@media (min-width: 768px) and (max-width: 1021px)": {
                  width: "56px",
                },
              }}
            />
            <Typography
              sx={{
                fontSize: "98px",
                font: "normal normal 600 98px/94px Poppins",

                color: "#000000",
                opacity: "1",
                "@media (min-width: 768px) and (max-width: 1021px)": {
                  font: "normal normal 600 56px/94px Poppins",
                },
              }}
            >
              Price Alerts
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: "25px",
              height: "81px",
              flexWrap: "wrap",
              width: "69%",
              "@media (min-width: 768px) and (max-width: 1021px)": {
                fontSize: "23px",
                width: "85%",
              },
            }}
          >
            Want to know the best time to purchase gold coins? Leave it with us.
            We'll keep an eye on the prices and let you know when there's a
            great deal on your favourite coins
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <form onSubmit={handleSubmit}>
              <Phone
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
               
                ValidError={valid}
                width="517px"
                height="82px"
              />
              <Button
                type="submit"
                sx={{
                  width: "238px",
                  height: "82px",
                  background: "#0D51D2 0% 0% no-repeat padding-box",
                  borderRadius: "7px",
                  opacity: 1,
                  fontSize: "31px",
                  color: "#FFFFFF",
                  textTransform: "none",
                  marginTop: "2rem",
                }}
              >
                Submit
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PriceAlert;
