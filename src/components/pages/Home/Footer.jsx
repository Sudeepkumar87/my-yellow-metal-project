import React from "react";
import { Button, Typography, Box, Card, Footer } from "@mui/material";
import FooterList from "../../molecules/FooterList";
import Yellow from "../../assets/navImages/Yellow.png";
import facebook from "../../assets/IconImages/facebook.svg";
import twitter from "../../assets/IconImages/twitter.svg";
import googleplus from "../../assets/IconImages/googleplus.svg";
import instagram from "../../assets/IconImages/instagram.svg";
import pinterest from "../../assets/IconImages/pinterest.svg";

const FooterFolder = () => {
  const iconList = [
    {
      img: facebook,
    },
    {
      img: twitter,
    },
    {
      img: googleplus,
    },
    {
      img: instagram,
    },
    {
      img: pinterest,
    },
  ];
  return (
    <Box
      sx={{
        paddingTop: "133px",
        paddingRight: "2rem",
        paddingLeft: "2rem",
        // maxWidth: "px",
        height: "501px",

        background: "#333746 0% 0% no-repeat padding-box",
        opacity: "1",

        "@media (min-width: 425px) and (max-width: 764px)": {
          paddingTop: "60px",
          height:"auto"
        },
        "@media (min-width: 375px) and (max-width: 424px)": {
          height: "850px",
          paddingTop: "60px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          "@media (min-width: 425px) and (max-width: 764px)": {
            display: "block",
          },
          "@media (min-width: 375px) and (max-width: 424px)": {
            display: "block",
          },
        }}
      >
        <Box>
          <Box
            component="img"
            src={Yellow}
            sx={{
              width: "262px",
              height: "149px",
              "@media (min-width: 1024px) and (max-width: 1259px)": {
                width: "200px",
              },
              "@media (min-width: 768px) and (max-width: 1023px)": {
                width: "200px",
              },
              "@media (min-width: 425px) and (max-width: 767px)": {
                display: "flex",
                margin: "auto",
              },
              "@media (min-width: 375px) and (max-width: 424px)": {
                width: "200px",
                display: "flex",
                margin: "auto",
              },
            }}
          />
          <Typography
            sx={{
              fontSize: "24px",
              font: "normal normal normal 24px/40px Poppins",
              display: "flex",
              flexWrap: "wrap",
              width: "80%",

              color: "#FFFFFF",

              height: "113px",
              paddingTop: "61px",
              "@media (min-width: 425px) and (max-width: 767px)": {
                textAlign: "center",
                margin: "auto",
              },
              "@media (min-width: 375px) and (max-width: 424px)": {
                paddingBottom: "3rem",
                textAlign: "center",
                margin: "auto",
              },
            }}
          >
            Every festival or occasion in India brings a lot of joy and
            happiness for everyone. For Some, it's the season of gifts.
          </Typography>
        </Box>
        <Box
          sx={{
            paddingTop: "5rem",
            // display: "flex",
            flexWrap: "wrap",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            "@media (min-width: 1024px) and (max-width: 1439px)": {
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            },
            "@media (min-width: 768px) and (max-width: 1023px)": {
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            },
            "@media (min-width: 425px) and (max-width: 767px)": {
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            },
            "@media (min-width: 375px) and (max-width: 424px)": {
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            },
          }}
        >
          {FooterList.map((item) => (
            <Box
              sx={{
                fontSize: "20px",
                font: "normal normal medium 32px/40px Poppins",

                color: "#FFFFFF",
                opacity: "1",
                whiteSpace: "nowrap",
                gap: "10px",
                "@media (min-width: 1024px) and (max-width: 1259px)": {
                  whiteSpace: "none",
                },
                "@media (min-width: 768px) and (max-width: 1023px)": {
                  fontSize: "16px",
                },
              }}
            >
              {item}
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            paddingTop: "4rem",
            marginLeft: "8rem",
            "@media (min-width: 425px) and (max-width: 767px)": {
              marginLeft: "1rem",
            },
            "@media (min-width: 425px) and (max-width: 767px)": {
              paddingTop: "1rem",
              textAlign: "center",
              marginLeft: "1rem",
            },
            "@media (min-width: 375px) and (max-width: 424px)": {
              paddingTop: "1rem",
              textAlign: "center",
              marginLeft: "1rem",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "32px",
              font: "normal normal medium 32px/40px Poppins",

              color: "#FFFFFF",
              opacity: "1",
              paddingBottom: "1rem",
              "@media (min-width: 768px) and (max-width: 1023px)": {
                fontSize: "16px",
                textAlign: "center",
              },
              "@media (min-width: 425px) and (max-width: 767px)": {
                textAlign: "center",
              },
            }}
          >
            Follow Us on
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              paddingBottom:"2rem",
              "@media (min-width: 768px) and (max-width: 1023px)": {
                display: "grid",
                gridTemplateColumns: "1fr 1fr",

              },
            }}
          >
            {iconList.map((item) => (
              <Box
                component="img"
                src={item.img}
                sx={{
                  width: "59px",
                  height: "59px",

                  "@media (min-width: 1024px) and (max-width: 1259px)": {
                    width: "39px",
                  },
                  "@media (min-width: 768px) and (max-width: 1023px)": {
                    width: "39px",
                  },
                  "@media (min-width: 375px) and (max-width: 424px)": {
                    width: "48px",
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FooterFolder;
