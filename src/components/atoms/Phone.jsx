import React, { useState } from "react";
import { Button, Typography, Box, Card, Input } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import reload from "../assets/WeedingImages/reload.svg";

const Phone = ({
  phoneNumber,
  setPhoneNumber,
  width,
  height,
  showOtpInput,
  register,
  valid,
  formValue,
  setFormValue,
  ValidError,
  setOtpNumber,
  otpNumber


}) => {
   const validationError = !valid ? !valid : !ValidError;
  return (
    <Box className="phone-input-container">
      {!showOtpInput ? (
        <label sx={{}}>
          <Typography sx={{ fontSize: "25px", color: "#42526E" }}>
            Mobile No
          </Typography>

          <PhoneInput
         
            defaultCountry="US"
            type="number"
            // onChange={(value) => {
            //   if (setPhoneNumber) {
            //     setPhoneNumber(value);
            //   } else {
            //     setFormValue(value);
            //   }
            // }}
            onChange={(value) =>
              setPhoneNumber ? setPhoneNumber(value) : console.log(setFormValue(value))
            }
            value={phoneNumber ? phoneNumber : formValue}
            placeholder="Enter Mobile No"
            style={{
              width: width,
              height: height,
              background: "#FFFFFF",
              border: "1px solid #939393",
              borderRadius: "9px",

              "@media (min-width: 768px) and (max-width: 1021px)": {
                width: "353px",
              },
            }}
            inputStyle={{
              width: width ? width : "90%",
              height: "82px",
              background: "#FFFFFF",
              border: "1px solid #939393",
              borderRadius: "9px",
              "@media (min-width: 768px) and (max-width: 1021px)": {
                width: "353px",
              },
            }}
          />
         {ValidError &&<p style={{color:"red"}}>phone number should be valid</p>}
        </label>
      ) : (
        <label>
          <Typography sx={{ fontSize: "25px", color: "#42526E" }}>
            OTP
          </Typography>
          <input
            type="number"
            value={otpNumber}
            onChange={(e)=>console.log(setOtpNumber(e.target.value))}
            style={{
              width: "95%",
              height: "50px",
              background: "#FFFFFF",
              border: "1px solid #939393",
              borderRadius: "9px",
              padding: "10px",
              fontSize: "16px",
            }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              paddingTop: "2rem",
            }}
          >
            <Box component="img" src={reload} sx={{ width: "4%" }} />
            <Typography sx={{ fontSize: "26px", color: "#4D5052" }}>
              Resend OTP
            </Typography>
          </Box>
        </label>
      )}
    </Box>
  );
};

export default Phone;
