import { Box, Card, Typography } from "@mui/material";
import React, { useState } from "react";

import articleList from "../../molecules/ArticleList";
import Pagination from "../../atoms/Pagination";

const TopArticles = () => {
  const [page, setPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  const lastPostIndex = page * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = articleList.slice(firstPostIndex, lastPostIndex);

  // const currentArticle = articleList[page - 1];
  return (
    <>
      <Box sx={{ background: "#F5F8FF", width: "100%" ,marginTop:"2rem", marginBottom:"1rem"}}>
        <Box>
          <Typography
            sx={{
              fontSize: "62px",
              textAlign: "center",
              font: "normal normal medium 62px/81px Poppins",

              color: "#111111",
              opacity: "1",
              "@media (min-width: 1024px) and (max-width: 1439px)": {
                fontSize: "46px",
              },
            }}
          >
            Read top articles from Yellowmetals
          </Typography>
          '
          <Typography
            sx={{
              fontSize: "24px",
              font: "normal normal normal 24px/40px Poppins",
              maxWidth: "983px",
              textAlign: "center",
              margin: "auto",

              color: "#111111",
              opacity: 1,
              "@media (min-width: 768px) and (max-width: 1023px)": {
                maxWidth: "765px",
              },
              "@media (min-width: 425px) and (max-width: 767px)": {
                maxWidth: "983px",
              },
            }}
          >
            Convert your digital gold to physical gold by paying a nominal
            minting charge. Your delivery comes with free insurance, to ensure
            your coins and bars reach you safely.
          </Typography>
        </Box>

        <Box
          sx={{
            width:"100%",
            justifyContent: "center",
            display: "flex",
            gap: "29px",
            paddingTop: "95px",
            // display:"grid",
            // gridTemplateColumns:"1fr 1fr 1fr",
            "@media (min-width: 1024px) and (max-width: 1439px)": {
              // display: "grid",
              // gridTemplateColumns: "1fr",
            },
            "@media (min-width: 768px) and (max-width: 1023px)": {
               display: "grid",
               gridTemplateColumns: "1fr 1fr",
            },
            "@media (min-width: 425px) and (max-width: 767px)": {
              display: "grid",
               gridTemplateColumns: "1fr",
            },
          }}
        >
          {currentPosts.map((item) => (
            <Card
              sx={{
                width:"100%",
                // width: "566px",
                height: "654px",
                background: "#FFFFFF 0% 0% no-repeat padding-box",
                border: "1px solid #70707061",
                borderRadius: "6px",
                opacity: 1,
                marginRight: "2rem",
                marginLeft: "2rem",
                "@media (min-width: 1024px) and (max-width: 1439px)": {
            
                },
                "@media (min-width: 768px) and (max-width: 1023px)": {
                 width:"88%",
              height:"677px"
                },
                "@media (min-width: 425px) and (max-width: 767px)": {
                  width:"88%",
                },
              }}
            >
              <Box
                component="img"
                src={item.img}
                sx={{
                  width:"100%",
            
                  height: "283px",
                  marginBottom: "38px",
                  "@media (min-width: 1024px) and (max-width: 1439px)": {
                    // width: "566px",
                  },
                  "@media (min-width: 768px) and (max-width: 1023px)": {
                    // width: "566px",
                  },
                }}
              />
              <Typography
                sx={{
                  fontSize: "25px",
                  width:"96%",
                  marginBottom: "34px",
                  paddingLeft: "20px",
                  "@media (min-width: 1024px) and (max-width: 1439px)": {
                    // maxWidth: "521px",
                  },
                  "@media (min-width: 768px) and (max-width: 1023px)": {
                    // maxWidth: "521px",
                  },
                }}
              >
                {item.Head}
              </Typography>
              <Typography
                sx={{
                  font: "normal normal normal 16px/29px Poppins",

                  color: "#111111",
                  opacity: 1,
                  paddingLeft: "20px",
                  paddingRight: "4px",
                  "@media (min-width: 1024px) and (max-width: 1439px)": {
                  
                  },
                }}
              >
                {item.Text}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  paddingLeft: "20px",
                  paddingRight: "73px",
                  gap: "1rem",
                }}
              >
                <Box
                  component="img"
                  src={item.one}
                  sx={{ width: "36px", height: "36px" }}
                />
                <Box
                  component="img"
                  src={item.second}
                  sx={{ width: "36px", height: "36px" }}
                />
                <Box
                  component="img"
                  src={item.third}
                  sx={{ width: "36px", height: "36px" }}
                />
              </Box>
            </Card>
          ))}
        </Box>
        <Box>
          {/* <Pagination
            totalPosts={articleList.length}
            postsPerPage={postsPerPage}
            page={page}
            setPage={setPage}
          /> */}
        </Box>
      </Box>
    </>
  );
};

export default TopArticles;
