import axios from "axios";
 import {getApiCall,postApiCall,UpdateApiCall,otpNumber,resendOtpNumber} from "../Api"


export const GET_API_REQUEST = "GET_API_REQUEST";
export const RESENDOTP_API_REQUEST = "RESENDOTP_API_REQUEST";
export const OTP_API_REQUEST = "OTP_API_REQUEST";
export const POST_API_REQUEST = "POST_API_REQUEST";
export const Main_Get_APi = "Main_Get_APi"
 export const GET_API_SUCCESS = "GET_API_SUCCESS";
export const GET_API_FAILURE = "GET_API_FAILURE";

export const GetApiRequest = () => {
  return {
    type: GET_API_REQUEST,
  };
};
export const OtpApiRequest = () => {
  return {
    type: OTP_API_REQUEST,
  };
};
export const ResendOtpApiRequest = () => {
  return {
    type: RESENDOTP_API_REQUEST,
  };
};
export const PostApiRequest = (phoneNumber) => {
  return {
    type: POST_API_REQUEST,
    payload:phoneNumber
  };
};


export const GetApiSuccess = (data) => {

  return {
    type: GET_API_SUCCESS,
    payload: data,
  };
};
export const GetApiFailure = (error) => {
  return {
    type: GET_API_FAILURE,
    payload: error,
  };
};

export const MainGetAPi = () => {

    return GetApiRequest(getApiCall({url:"users"}));

 

};
export const OtpGetAPi = () => {
  return OtpApiRequest(otpNumber());
};
export const resendOtpGetAPi = () => {
  return ResendOtpApiRequest(resendOtpNumber());
};
export const  PostGetAPi = (phoneNumber) => {

  return PostApiRequest(postApiCall({url:"users",data:phoneNumber}));

};


