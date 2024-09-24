import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Card,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Login from "../assets/MeenuItemsImages/Login.png";
import close from "../assets/MeenuItemsImages/close.png";
import Phone from "./Phone";
import { useSelector, useDispatch } from "react-redux";
 import  {OtpGetAPi} from "../../reducer/api/GetApiAction"
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

const LoginModal = ({ open, handleClose, setShowModal }) => {
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [formValue, setFormValue] = useState();
  const [checked, setChecked] = useState(false);
  const [ValidError, setValidError] = useState(false);
  const[otpNumber,setOtpNumber]=useState("")

  console.log(otpNumber)

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(OtpGetAPi())
  },[])

  

const handleFormSubmit = (e) => {
  e.preventDefault();

  const isValidPhoneNumber = validatePhoneNumber(formValue);
  console.log(formValue);


  setValidError(!isValidPhoneNumber);
  if(isValidPhoneNumber){
    setShowOtpInput(true)
  }

};

const validatePhoneNumber = (phoneNumber) => {
  const phoneNumberPattern = /^[0-9]{10}$/;
  return phoneNumberPattern.test(phoneNumber);
};

const handleFinalSubbmit =()=>{
  console.log("clicked")
}

  // const [ValidError, setValidError] = useState(false);



  // const handleFormSubmit = (e) => {
  //   e.preventDefault();


  
  //   const isValidPhoneNumber = validatePhoneNumber(formValue);
  //   console.log(formValue)
    
  //   setValidError(isValidPhoneNumber);
  
  // };
  // const validatePhoneNumber = (phoneNumber) => {
  //   const phoneNumberPattern = /^[0-9]{10}$/;
  //   return phoneNumberPattern.test(phoneNumber);
  // };

  const validateCheckbox = () => {};

  const handleCheckbox = (e) => {
    setChecked(e.target.checked);
    console.log("checked");
  };

  return (
    <Modal
      onClose={handleClose}
      open={open}
      style={{
        borderRadius: "13px",
        width: "50%",
        top: "128px",
        left: "375px",
      }}
    >
      <Card
        sx={{
          background: "#FFFFFF 0% 0% no-repeat padding-box",
          height: "569px",
        }}
      >
        <Box sx={{ marginRight: "2rem", marginLeft: "2rem" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "2rem",
              marginBottom: "10px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Box
                component="img"
                src={Login}
                sx={{
                  width: "60px",
                  height: "60px",
                  alignItems: "center",
                  gap: "10px",
                }}
              />
              <Typography sx={{ fontSize: "66px", color: "#000000" }}>
                Login
              </Typography>
            </Box>
            <Box
              component="img"
              src={close}
              onClick={() => setShowModal(false)}
              sx={{ width: "45px", height: "45px" }}
            />
          </Box>
          <form onSubmit={handleFinalSubbmit}>
            <Box>
              <Phone
                width="657px"
                showOtpInput={showOtpInput}
                formValue={formValue}
                setFormValue={setFormValue}
                setOtpNumber={setOtpNumber}
                otpNumber={otpNumber}
            
                ValidError={ValidError}
              />
              <Box sx={{ marginTop: "2rem" }}>
                <Button
                  type="submit"
                  onClick={handleFormSubmit}
                 
                  sx={{
                    width: "100%",
                    height: "78px",
                    color: "#FFFFFF",
                    fontSize: "31px",
                    background: "#4562DB 0% 0% no-repeat padding-box",
                    borderRadius: "7px",
                    textTransform: "none",
                  }}
                >
                  Proceed
                </Button>
              </Box>
              {!showOtpInput && (
                <Box sx={{ paddingTop: "46px", paddingBottom: "71px" }}>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          type="checkbox"
                          checked={checked}
                          onChange={handleCheckbox}
                          sx={{
                            width: "33px !important",
                            height: "33px !important",
                          }}
                        />
                      }
                      label={
                        <Box>
                          <Typography
                            sx={{
                              fontSize: "26px",
                              color: "#4D5052",
                              whiteSpace: "nowrap",
                            }}
                          >
                            By proceeding you agree to our
                            <Box
                              component="span"
                              sx={{ color: "#4562DB", fontSize: "26px" }}
                            >
                              {" "}
                              Terms and Conditions
                            </Box>
                          </Typography>
                        </Box>
                      }
                    />
                  </FormGroup>
                </Box>
              )}
            </Box>
          </form>
        </Box>
      </Card>
    </Modal>
  );
};

export default LoginModal;
