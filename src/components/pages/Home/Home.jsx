import React, { useEffect, useState } from "react";
import CustomButton from "../../atoms/CustomButton";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
 import  {MainGetAPi} from "../../../reducer/api/GetApiAction.js"
import Search from "../../organisms/SearchBar";
import Nav from "../../atoms/Nav";
import HomeBackground from "./HomeBackground";
import DigitalTransaction from "../../pages/Home/digitalTransaction";
import CustomerFeedback from "../../pages/Home/CustomerFeedback";
import PriceAlert from "../../pages/Home/PriceAlert";
import LoginYellowMetalAccount from "../../pages/Home/LoginYellowMetalAccount.jsx";
import FooterFolder from "./Footer.jsx";
import SocialMedia from "./SocialMedia.jsx";
import Services from "./Services.jsx";
import Media from "./Media.jsx";
import TopArticles from "./TopArticles.jsx";
import FestivalImages from "./FestivalImages.jsx";
import Video from "./Video.jsx";
import LoginModal from "../../atoms/LoginModal.jsx";
import {getApiCall} from "../../../reducer/Api.js"

const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(MainGetAPi())
  }, []);
  const background = "#0D51D2 0% 0% no-repeat padding-box";
  return (
    <div>
           <Nav />    
         <LoginModal/>
         {/* <HomeBackground />    */}
        {/* <DigitalTransaction />
       <FestivalImages />  
        <CustomerFeedback />       
         <Video />   */}
       <PriceAlert /> 
         {/* <Services /> 

       <Media />   

      <TopArticles /> 

       <LoginYellowMetalAccount />  
         <FooterFolder />           */}

      {/* <CustomButton buttonName="hello" background={background}/>  */}
      {/* <SocialMedia/>  */}
    </div>
  );
};

export default Home;
