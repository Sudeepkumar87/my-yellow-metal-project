import { legacy_createStore as createStore,applyMiddleware,combineReducers} from 'redux'
 import {thunk} from "redux-thunk"
 import newsReducer from "./reducer/newsReducer"
 import getReducer from "./reducer/api/GetApiReducer"

 const rootReducer= combineReducers({
    news:newsReducer,
    get:getReducer
 })





 const store= createStore(rootReducer,applyMiddleware(thunk))

 export default store;

