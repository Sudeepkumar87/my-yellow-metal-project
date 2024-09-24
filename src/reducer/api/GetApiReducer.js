import {GET_API_REQUEST,GET_API_SUCCESS,GET_API_FAILURE,POST_API_REQUEST,OTP_API_REQUEST,RESENDOTP_API_REQUEST } from "./GetApiAction"

const initialState={
    news:[],
    isLoading:false,
    error:null
}

const getReducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_API_REQUEST:
        return{
            ...state,
            isLoading:true,
            error:null
        };
        case OTP_API_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:null
            };
            case RESENDOTP_API_REQUEST:
                return{
                    ...state,
                    isLoading:true,
                    error:null
                };
        case POST_API_REQUEST :
            return{
                ...state,
                isLoading:true,
                error:null
            };
        case GET_API_SUCCESS:
            console.log(action.payload
            )
        return{
           ...state,
           isLoading:false,
           mews:action.payload 
        };
        case GET_API_FAILURE:
        return{
            ...state,
            isLoading:false,
            error:action.payload
        }
        default :
       return state;
    }

}

export default getReducer