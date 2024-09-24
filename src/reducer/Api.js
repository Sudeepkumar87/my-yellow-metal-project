import axios from "axios";

const baseUrl="https://jsonplaceholder.typicode.com/"
const phoneOtp=1234
const resendOtp=1111

export const otpNumber =async()=>{
  console.log(phoneOtp)
  return phoneOtp
 
 
}
export const resendOtpNumber =async()=>{
  console.log(resendOtp)
  return resendOtp
 
 
}
export const getApiCall =(props)=>{
const  {url} = props

  
   axios.get (baseUrl+url)
    .then ((response)=>{
   return response.data
     
   })
 
 }

 export const postApiCall =async (props)=>{
  const  {url,data} = props
  console.log("data",data)
  
    
    const responseData = await axios.post (baseUrl+url,data)
    console.log("res", responseData)
      
     return responseData
       

   
   
   };


   export const UpdateApiCall =async (props)=>{
    const  {url,data} = props

    
      
      const responseData = await axios.post (baseUrl+url,data)
      console.log("res", responseData)
        
       return responseData
         
  
     
     
     };

   


