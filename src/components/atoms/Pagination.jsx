import React from "react";
import { Box, Button, Card, Typography } from "@mui/material";
import classes from "./Pagination.module.css";

const Pagination = ({ totalPosts, postsPerPage, page, setPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        paddingTop: "98px",
        textAlign: "center",
        justifyContent: "center",
        paddingBottom: "85px",
      }}
    >
      <span
        style={{
          fontSize: "24px",
          color: "#4562DB",
          opacity: 1,
          "@media (min-width: 425px) and (max-width: 767px)": {
            fontSize: "16px",
          },
        }}
      >
        previous
      </span>
      {pages.map((item, index) => {
        return (
          <Button
            className={item == page ? "classes.active" : ""}
            onClick={() => setPage(item)}
          >
            {item}
          </Button>
        );
      })}
      <span
        style={{
          fontSize: "24px",
          color: "#4562DB",
          opacity: 1,
          "@media (min-width: 425px) and (max-width: 767px)": {
            fontSize: "16px",
          },
        }}
      >
        Next
      </span>
    </Box>
  );
};

export default Pagination;
