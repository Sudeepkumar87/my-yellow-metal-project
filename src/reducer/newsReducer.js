import {FETCH_NEWS_REQUEST,fetchNewsSuccess,FETCH_NEWS_FAILURE, FETCH_NEWS_SUCCESS} from "./newsAction"

const initialState={
    news:[],
    isLoading:false,
    error:null
}

const newsReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_NEWS_REQUEST:
        return{
            ...state,
            isLoading:true,
            error:null
        };
        case FETCH_NEWS_SUCCESS:
            console.log(action.payload
            )
        return{
           ...state,
           isLoading:false,
           mews:action.payload 
        };
        case FETCH_NEWS_FAILURE:
        return{
            ...state,
            isLoading:false,
            error:action.payload
        }
        default :
       return state;
    }

}

export default newsReducer