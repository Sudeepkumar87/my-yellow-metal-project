import axios from "axios";

export const FETCH_NEWS_REQUEST = "FETCH_NEWS_REQUEST";
export const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
export const FETCH_NEWS_FAILURE = "FETCH_NEWS_FAILURE";

export const fetchNewsRequest = () => {
  return {
    type: FETCH_NEWS_REQUEST,
  };
};
export const fetchNewsSuccess = (news) => {

  return {
    type: FETCH_NEWS_SUCCESS,
    payload: news,
  };
};
export const fetchNewsFailure = (error) => {
  return {
    type: FETCH_NEWS_FAILURE,
    payload: error,
  };
};

export const fetchNews = () => {
  return (dispatch) => {
    dispatch(fetchNewsRequest());

    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response);
    });
  };
};
