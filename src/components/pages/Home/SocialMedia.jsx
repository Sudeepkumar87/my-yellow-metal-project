import React from 'react'
import { Button, Typography, Box, Card } from "@mui/material";
import facebook from "../../assets/socialMediaIcons/facebook.png";
import twitter from "../../assets/socialMediaIcons/twitter.png";
import linkedin from "../../assets/socialMediaIcons/linkedin.png";
// import google from "../../assets/socialMediaIcons/google.png";
import instagram from "../../assets/socialMediaIcons/instagram.png";
import pinterest from "../../assets/socialMediaIcons/pinterest.png"


const SocialMedia = () => {
    const socialMediaList=[

        {
            img:facebook
        },
        {
            img:twitter
        }

        ,
        {
            img:linkedin
        },
        {
            img:instagram
        },
        {
            img:pinterest
        },
      
    ]
  return (
  <Box>
    <Typography>Social Media</Typography>
    <Box>
        {socialMediaList.map((item)=>
        (
            <Box src={item.img}/>
        ))}
    </Box>
  </Box>
  )
}

export default SocialMedia
