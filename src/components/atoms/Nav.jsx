import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
// import MenuIcon from '@mui/icons-material/Menu';
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from '@mui/icons-material/Adb';
import Yellow from "../assets/navImages/Yellow.png";
import coin from "../assets/navImages/coin.png";
import Equalizer from "../assets/navImages/Equalizer.png";
import corporate from "../assets/navImages/corporate.png";
import solid from "../assets/navImages/solid.png";
import information from "../assets/navImages/information.png";
import page from "../assets/navImages/Page.png";
import LoginModal from "./LoginModal";

const pages = [
  {
    id: 0,
    image: coin,
    label: "Buy coins",
  },
  {
    id: 1,
    image: Equalizer,
    label: "Customized Coins",
  },
  {
    id: 2,
    image: corporate,
    label: "Corporate Deals",
  },
  {
    id: 3,
    image: solid,
    label: "Digital gold",
  },
  {
    id: 4,
    image: information,
    label: "About Us",
  },
  {
    id: 5,
    image: page,
    label: "Contact Us",
  },
];

const Nav = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(true);
  };

  return (
    <Box>
      <AppBar sx={{ backgroundColor: "#fff", height: "124px",marginBottom:"2rem" }}>
        <Box>
          <Container
            sx={{
              paddingTop: "10px",
              "&.css-zxrx2h-MuiContainer-root": {
                paddingLeft: "0px",
                paddingRight: "0px",
                marginLeft: "1px !important",
                marginRight: "1px important",
              },
              "@media (min-width: 1200px)": {
                maxWidth: "none",
              },
            }}
          >
            <Toolbar style={{display:"flex",justifyContent:"space-between"}}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "10px",
                }}
              >
                <Box sx={{display:"flex", gap:"6rem"}}>
                  <Box
                    component="img"
                    src={Yellow}
                    sx={{ width: "153px", height: "87px" }}
                  />
                   <Box sx={{ display: "flex", gap:"10px" }}>
                  {pages.map((page, index) => (
                    <Box
                      key={page}
                      sx={{
                        display: "flex",
                        whiteSpace: "nowrap",
                        gap: "10px",
                        cursor: "pointer",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        component="img"
                        src={page.image}
                        alt={page.label}
                        sx={{ width: "32px", height: "32px" }}
                      />
                      <Typography
                        sx={{
                          color:
                            selectedIndex === index ? "#FF9100" : "#343434",
                        }}
                        onClick={() => setSelectedIndex(index)}
                      >
                        {page.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                </Box>

               
            
              </Box>
              <Box>
                <Button
                  onClick={() => console.log(setShowModal(true))}
                  sx={{
                    width: "157px",
                    height: "50px",
                    background: " #FF5C53 0% 0% no-repeat padding-box",
                    borderRadius: "7px",
                    opacity: "1",
                    color: "#FFFFFF",
                    textTransform: "none",
                  }}
                >
                  Login
                </Button>
                {showModal && (
                  <LoginModal
                    open={showModal}
                    handleClose={handleClose}
                    setShowModal={setShowModal}
                  />
                )}
              </Box>
            </Toolbar>
          </Container>
        </Box>
      </AppBar>
    </Box>
  );
};

export default Nav;
